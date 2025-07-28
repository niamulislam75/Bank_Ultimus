const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import ERPLoginPage from '../../ERP/ERPLoginPage'; // ES Module import
//import EmployeeDetails from '../../ERP/EmployeeDetailsPage'; // ES Module import
import EmployeeInfo from '../../ERP/EmployeeInfoPage'; // ES Module import
import OrganizationDetails from '../../ERP/OrganizationDetailsPage'; // ES Module import
import AddtionalInfo from '../../ERP/AddtionalInfoPage'; // ES Module import
import EducationalInfo from '../../ERP/EducationalInfoPage'; // ES Module import
import JobExperience from '../../ERP/JobExperiencePage'; // ES Module import
import Training from '../../ERP/TrainingPage'; // ES Module import   
import Spouse from '../../ERP/SpousePage'; // ES Module import 
import Children from '../../ERP/ChildrenPage'; // ES Module import
import Nominee from '../../ERP/NomineePage'; // ES Module import
import PhotoAndSignature from '../../ERP/PhotoAndSignaturePage'; // ES Module import
import Relatives from '../../ERP/RelativesPage'; // ES Module import
import Reference from '../../ERP/ReferencePage'; // ES Module import
import Proficiency from '../../ERP/ProficiencyPage'; // ES Module import
import Attachment from '../../ERP/AttachmentPage';
import EmployeeList from '../../ERP/EmployeeListPage';


describe('Bank Ultimus', () => {
    it('Step 1: Employee Details', function () {
        const erplogin = new ERPLoginPage();
        const employeeInfo = new EmployeeInfo();
        const organizationDetails = new OrganizationDetails();
        const addtionalInfo = new AddtionalInfo();
        const educationalInfo = new EducationalInfo();
        const jobExperience = new JobExperience();
        const training = new Training();
        const spouse = new Spouse();
        const children = new Children();
        const nominee = new Nominee();
        const photoAndSignature = new PhotoAndSignature();
        const relatives = new Relatives();
        const reference = new Reference();
        const proficiency = new Proficiency();
        const attachment = new Attachment();


        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[2]); // Use first row
            erplogin.erpLogin();
        });


        employeeInfo.EmployeeInfo();
        organizationDetails.OrganizationDetails();
        addtionalInfo.AddtionalInfo();
        educationalInfo.EducationalInfo();
        jobExperience.JobExperience();
        training.Training();
        spouse.Spouse();
        children.Children();
        nominee.Nominee();
        //photoAndSignature.Nominee(); // Navigate to Photo & Signature Page
        photoAndSignature.PhotoAndSignature(); // Upload Photo & Signature
        relatives.Relatives(); // Navigate to Relatives Page
        reference.Reference(); // Navigate to Reference Page
        proficiency.Proficiency(); // Navigate to Proficiency Page
        attachment.Attachment(); // Navigate to Attachment Page






    });



})