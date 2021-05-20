package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.adactinsite.baseclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//java//com//adactin//feature",
glue="com.zStepDefinition",
monochrome=true,
dryRun=false,
strict=true,
tags=("~@regressionTest"),
plugin= {"html:Report/Html_Report",
		
		"pretty",
		
		"json:Reports/Cucumber.json",
		
		"com.cucumber.listener.ExtentCucumberFormatter:Report/ExtentReport.html"
		
}

)
public class Test_Runner {
	
	public static WebDriver driver; //--->  null
	
	@BeforeClass
	public static void set_Up() throws Throwable {


		String browser = FileReaderManager.getInstance().getInstanceCR().getBrowser();
		
		driver = BaseClass.getDriver(browser);
		
		
	}
	
	@AfterClass
	public static void tearDown() {

		driver.close();
		
	}
	
	
	
	
	

}
