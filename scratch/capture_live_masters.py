from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time
import os

def test():
    print("Starting Chrome...")
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--window-size=1440,900")
    options.add_argument("--disable-gpu")
    
    driver = webdriver.Chrome(options=options)
    try:
        print("Navigating to http://127.0.0.1:8088/index.html...")
        driver.get("http://127.0.0.1:8088/index.html")
        time.sleep(2.0)
        
        os.makedirs("scratch", exist_ok=True)
        driver.save_screenshot("scratch/view_initial.png")
        print("Captured initial shelf -> scratch/view_initial.png")
        
        # Check books count
        cards = driver.find_elements(By.CSS_SELECTOR, ".book-card-3d")
        print(f"Books count on shelf: {len(cards)}")
        for idx, c in enumerate(cards):
            h3 = c.find_elements(By.TAG_NAME, "h3")
            title = h3[0].text if h3 else "NO TITLE"
            print(f"  Book {idx+1}: class='{c.get_attribute('class')}', title='{title}'")
            
        # Click next button on shelf 4 times to bring Masters Global to active center
        next_hud = driver.find_element(By.ID, "next-book")
        for i in range(4):
            next_hud.click()
            time.sleep(0.5)
            
        driver.save_screenshot("scratch/view_masters_active.png")
        print("Captured active Masters Global -> scratch/view_masters_active.png")
        
        # Click the active book card to open the 3D flipbook
        active_card = driver.find_element(By.CSS_SELECTOR, ".book-card-3d.active")
        active_card.click()
        time.sleep(1.5)
        
        driver.save_screenshot("scratch/view_masters_flipbook_ch1.png")
        print("Captured Masters flipbook Ch1 -> scratch/view_masters_flipbook_ch1.png")
        
        # Switch to Chapter 2
        tabs = driver.find_elements(By.CSS_SELECTOR, ".book-role-tab")
        print(f"Book role tabs: {len(tabs)}")
        if len(tabs) > 1:
            tabs[1].click()
            time.sleep(1.2)
            driver.save_screenshot("scratch/view_masters_flipbook_ch2.png")
            print("Captured Masters flipbook Ch2 -> scratch/view_masters_flipbook_ch2.png")
            
        print("ALL SCREENSHOTS CAPTURED SUCCESSFULLY!")
    finally:
        driver.quit()

if __name__ == "__main__":
    test()
