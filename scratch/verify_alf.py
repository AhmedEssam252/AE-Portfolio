import time
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1440, 'height': 900})
        page = context.new_page()

        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        print("Navigating to portfolio...")
        page.goto("http://127.0.0.1:8088/index.html")
        page.wait_for_timeout(1000)

        # 1. Check shelf with all books
        page.screenshot(path="scratch/alf_shelf.png")
        print("Captured shelf screenshot.")

        # 2. Filter by Anna Lindh Foundation
        alf_btn = page.locator("#filter-alf-btn")
        if alf_btn.count() > 0:
            print("Clicking ALF filter tab...")
            alf_btn.click()
            page.wait_for_timeout(600)
            page.screenshot(path="scratch/alf_shelf_filtered.png")

        # 3. Click the ALF book to open flipbook
        alf_card = page.locator(".book-card-3d[data-project-id='anna-lindh-foundation']")
        if alf_card.count() > 0:
            print("Clicking ALF book card...")
            alf_card.click()
            page.wait_for_timeout(1200)
            page.screenshot(path="scratch/alf_book_ch1.png")
            print("Captured ALF Chapter 1 screenshot.")

            # Check specs content on left page
            left_text = page.locator("#left-page-content").inner_text()
            print("Left page specs preview:\n", left_text[:200])

            # Check chapter 2 tab
            ch_tabs = page.locator(".role-tab")
            print(f"Role tabs count: {ch_tabs.count()}")
            if ch_tabs.count() > 1:
                print("Switching to Chapter 2...")
                ch_tabs.nth(1).click()
                page.wait_for_timeout(1000)
                page.screenshot(path="scratch/alf_book_ch2.png")
                print("Captured ALF Chapter 2 screenshot.")

        # 4. Test mobile view (iPhone 14: 390x844)
        mobile_context = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True)
        mobile_page = mobile_context.new_page()
        mobile_page.goto("http://127.0.0.1:8088/index.html")
        mobile_page.wait_for_timeout(1000)

        # Click ALF tab on mobile
        m_alf_btn = mobile_page.locator("#filter-alf-btn")
        if m_alf_btn.count() > 0:
            m_alf_btn.click()
            mobile_page.wait_for_timeout(500)
            mobile_page.screenshot(path="scratch/alf_mobile_shelf.png")

        # Open book on mobile
        m_card = mobile_page.locator(".book-card-3d[data-project-id='anna-lindh-foundation']")
        if m_card.count() > 0:
            m_card.click()
            mobile_page.wait_for_timeout(1200)
            mobile_page.screenshot(path="scratch/alf_mobile_open.png")
            print("Captured ALF mobile open screenshot.")

        print(f"Total Console Errors: {len(console_errors)}")
        if console_errors:
            print("Console Errors:", console_errors)

        browser.close()

if __name__ == "__main__":
    verify()
