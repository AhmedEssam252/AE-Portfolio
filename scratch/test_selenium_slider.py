from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time
import os

def test():
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--window-size=1440,900")
    options.add_argument("--disable-gpu")
    
    driver = webdriver.Chrome(options=options)
    try:
        driver.get("http://127.0.0.1:8088/index.html")
        time.sleep(1.5)
        
        # 1. Capture initial shelf with category slider (showing 3 items)
        os.makedirs("scratch", exist_ok=True)
        driver.save_screenshot("scratch/slider_initial.png")
        print("Captured scratch/slider_initial.png")
        
        # Inspect visible pills in category-tabs-wrapper
        wrapper = driver.find_element(By.ID, "category-tabs-wrapper")
        wrapper_rect = wrapper.rect
        print(f"Wrapper rect: {wrapper_rect}")
        
        pills = driver.find_elements(By.CSS_SELECTOR, "#category-filter .cat-pill")
        print(f"Total pills: {len(pills)}")
        for idx, pill in enumerate(pills):
            p_rect = pill.rect
            text = pill.text.strip().replace("\n", " ")
            print(f"Pill {idx} ({text}): x={p_rect['x']}, width={p_rect['width']}")
        
        # 2. Click next slider arrow
        next_btn = driver.find_element(By.ID, "cat-slider-next")
        next_btn.click()
        time.sleep(0.8)
        driver.save_screenshot("scratch/slider_after_next.png")
        print("Captured scratch/slider_after_next.png")
        
        # 3. Click Anna Lindh Foundation filter tab
        alf_btn = driver.find_element(By.ID, "filter-alf-btn")
        alf_btn.click()
        time.sleep(0.8)
        driver.save_screenshot("scratch/alf_shelf_active.png")
        print("Captured scratch/alf_shelf_active.png")
        
        # 4. Check Anna Lindh Foundation book cover text & subtitle
        alf_cover = driver.find_element(By.CSS_SELECTOR, ".book-card-3d[data-project-id='anna-lindh-foundation']")
        print("ALF Card text:", alf_cover.text.replace("\n", " | "))
        
        # 5. Open Anna Lindh book
        alf_cover.click()
        time.sleep(1.2)
        driver.save_screenshot("scratch/alf_open_flipbook.png")
        print("Captured scratch/alf_open_flipbook.png")
        
        # 6. Test Mobile View (390x844)
        driver.set_window_size(390, 844)
        time.sleep(0.8)
        driver.save_screenshot("scratch/mobile_alf_open.png")
        print("Captured scratch/mobile_alf_open.png")
        
    finally:
        driver.quit()

if __name__ == "__main__":
    test()
