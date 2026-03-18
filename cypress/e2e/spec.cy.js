import { HomePage } from "../pageObjects/homePage";

describe('Final', () => {
  context("Make appointment", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("FinalTask", () => {
      HomePage.Fname.type("John");
      HomePage.Lname.type("Yes");
      HomePage.email.type("yesyes@yes.lv");
      HomePage.male.click();
      HomePage.number.type("5455689210")
      HomePage.DOB.click();
      cy.get("select.react-datepicker__year-select").select("1930");  
      cy.get("select.react-datepicker__month-select").select("February");
      cy.get(".react-datepicker__day--028").not(".react-datepicker__day--outside-month").click();
      HomePage.subjects.type("Econ").contains("Economics").click();;
      HomePage.hobbies.click();
      HomePage.picture.selectFile("files/pic1.jpeg");
      HomePage.state.click().contains("NCR").click();
      HomePage.city.click().contains("Delhi").click();
      HomePage.submit.click();
      const expectedData = {  
        "Student Name": "John Yes",  
        "Student Email": "yesyes@yes.lv",  
        "Gender": "Male",  
        "Mobile": "5455689210",  
        "Date of Birth": "28 February,1930",  
        "Subjects": "Economics",  
        "Hobbies": "Music",  
        "Picture": "pic1.jpeg",  
        "State and City": "NCR Delhi"  
      };
      Object.entries(expectedData).forEach(([label, value]) => {  
        cy.contains("td", label).next().should("have.text", value);  
      });
    });
  });
});