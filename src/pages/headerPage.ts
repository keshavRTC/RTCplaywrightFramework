

import { Page, expect } from '@playwright/test';


export class HeaderPage {
  constructor(private page: Page) {}

 // click menu header.
  async clickHeader(headerText: string) {
    let headerLocator ; 
        if (headerText === 'Contact Us') {
    // More specific: only pick the one with href="/contact-us/"
       headerLocator = this.page.locator('a[href="/contact-us/"]' , { hasText: 'Contact Us' });
    }
    else  if (headerText === '') {
    // Use XPath for empty text links
    headerLocator = this.page.locator('//div[@data-id="6a765d9"]//a[normalize-space() = ""]');
    }
    else if (headerText === 'Apply Now') {
  headerLocator = this.page.locator('//div[@data-id="6a765d9"]//a[@href="https://rtctek.com/apply-now"]');
}
else if (headerText === 'Get a Quote') {
  headerLocator = this.page.locator(`//div[@data-id='6a765d9']//a[normalize-space()='Get a Quote']`);
}


    else{
        console.log("log headeText-->", headerText);
     headerLocator = this.page.getByRole('link', { name: headerText , exact: true });
    }
    
    console.log("log th eheaderLocator---------->", headerLocator);
    await expect(headerLocator).toBeVisible();
    await headerLocator.click();
    await this.page.waitForLoadState('networkidle'); // optional but useful
  }

  async hoverHeader(headerText: string) {
    let headerLocator ; 
    if (headerText === 'Contact Us') {
    headerLocator = this.page.locator('a[href="/contact-us/"]', { hasText: 'Contact Us' });
  }
  else  if (headerText === '') {
    // Use XPath for empty text links
    headerLocator = this.page.locator('//div[@data-id="6a765d9"]//a[normalize-space() = ""]');
    }
  else if (headerText === 'Apply Now') {
  headerLocator = this.page.locator('//div[@data-id="6a765d9"]//a[@href="https://rtctek.com/apply-now"]');
}
else if (headerText === 'Get a Quote') {
  headerLocator = this.page.locator(`//div[@data-id='6a765d9']//a[normalize-space()='Get a Quote']`);
}
  else {
     headerLocator = this.page.getByRole('link', { name : headerText , exact: true } );
    console.log("headerLocator printing :", headerLocator);
  }
    await expect(headerLocator).toBeVisible();
    await headerLocator.hover();
    await this.page.waitForLoadState('networkidle'); // optional but useful
  }

  // Use hrefSlug to locate submenu links
  async clickSubmenuLink(hrefSlug: string) {
    let submenuLocator ;
    
        submenuLocator = this.page.locator(`//div[@data-id='6a765d9']//a[@href="https://rtctek.com${hrefSlug}"]`);
        await expect(submenuLocator).toBeVisible();
    await submenuLocator.click();
    await this.page.waitForLoadState('networkidle'); // optional but useful

                 
        
        
    

    
    
    // await expect(submenuLocator).toBeVisible();
    // await submenuLocator.click();
    // await this.page.waitForLoadState('networkidle'); // optional but useful
  }

  async validateURL(expectedSlug: string) {
    console.log("Validating URL for slug:", expectedSlug);
    await this.page.waitForLoadState('networkidle');
    const currentURL = this.page.url();
    console.log("Current URL:", currentURL);
    console.log("Expected Slug:", expectedSlug);
    expect(currentURL).toContain(expectedSlug);
  }

  async goToHome() {
    await this.page.goto('https://www.rtctek.com');
  }
}

