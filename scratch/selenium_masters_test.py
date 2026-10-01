from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time
import os
import json

def test():
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--window-size=1440,900")
    options.add_argument("--disable-gpu")
    
    driver = webdriver.Chrome(options=options)
    try:
        driver.get("http://127.0.0.1:8088/index.html")
        time.sleep(1.5)
        
        # Check console errors
        logs = driver.get_log('browser')
        print("Browser logs:", logs)
        
        # Check window state and projects
        state_info = driver.execute_script("""
            return {
                projectsCount: typeof PROJECTS !== 'undefined' ? PROJECTS.length : 'UNDEFINED',
                projectIds: typeof PROJECTS !== 'undefined' ? PROJECTS.map(p => p.id) : [],
                booksRendered: document.querySelectorAll('.book-card-3d').length,
                bookTitles: Array.from(document.querySelectorAll('.book-card-3d')).map(b => b.querySelector('h3') ? b.querySelector('h3').innerText : 'NO H3'),
                categories: Array.from(document.querySelectorAll('.cat-pill')).map(p => ({
                    id: p.id,
                    filter: p.dataset.filter,
                    text: p.innerText.trim().replace(/\\n/g, ' ')
                }))
            };
        """)
        print("State info:", json.dumps(state_info, indent=2, ensure_ascii=False))
        
        # Capture bookshelf view
        os.makedirs("scratch", exist_ok=True)
        driver.save_screenshot("scratch/shelf_full.png")
        print("Saved scratch/shelf_full.png")
        
        # Click Masters Global tab
        masters_btn = driver.find_element(By.ID, "filter-masters-btn")
        masters_btn.click()
        time.sleep(1.0)
        
        driver.save_screenshot("scratch/shelf_masters_tab.png")
        print("Saved scratch/shelf_masters_tab.png")
        
        # Check if masters-global book is active
        active_card = driver.find_element(By.CSS_SELECTOR, ".book-card-3d.active")
        print("Active card text:", active_card.text.replace("\n", " | "))
        
        # Click active card to open book
        active_card.click()
        time.sleep(1.5)
        
        driver.save_screenshot("scratch/masters_book_open.png")
        print("Saved scratch/masters_book_open.png")
        
        # Check Chapter tabs inside the book
        ch_tabs = driver.find_elements(By.CSS_SELECTOR, ".book-role-tab")
        print("Chapter tabs count:", len(ch_tabs))
        for idx, tab in enumerate(ch_tabs):
            print(f"Tab {idx}: {tab.text}")
            
        if len(ch_tabs) > 1:
            ch_tabs[1].click()
            time.sleep(1.0)
            driver.save_screenshot("scratch/masters_ch2_open.png")
            print("Saved scratch/masters_ch2_open.png")
            
        print("ALL COMPLETED SUCCESSFULLY!")
    finally:
        driver.quit()

if __name__ == "__main__":
    test()
