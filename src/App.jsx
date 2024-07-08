
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/contactUs/ContactUs";
import Home from './components/Home';
import AccountingBookKeeping from "./routes/Accounting Services/AccountingBookKeeping";
import FinancialDueDiligence from "./routes/Accounting Services/FinancialDueDiligence";
import PayrollServices from "./routes/Accounting Services/PayrollServices";
import RetirementPlanning from "./routes/Accounting Services/RetirementPlanning";
import AnnualCompanyRocCompliance from "./routes/Company Compliances/AnnualCompanyRocCompliance";
import AppointmentOfDir from "./routes/Company Compliances/AppointmentOfDir";
import ChangeInAddress from "./routes/Company Compliances/ChangeInAddress";
import ChangeInObjectClause from "./routes/Company Compliances/ChangeInObjectClause";
import ClosureCompany from "./routes/Company Compliances/ClosureCompany";
import CompanyAudit from "./routes/Company Compliances/CompanyAudit";
import IncAuthorizedCapital from "./routes/Company Compliances/IncAuthorizedCapital";
import ResignationOfDir from "./routes/Company Compliances/ResignationOfDir";
import ShareTransferOfCompany from "./routes/Company Compliances/ShareTransferOfCompany";
import StrikeOffCompany from "./routes/Company Compliances/StrikeOffCompany";
import PartnerCompany from "./routes/Convert Your Business/PartnerCompany";
import PrivateToPublic from "./routes/Convert Your Business/PrivateToPublic";
import ProprietorToCompany from "./routes/Convert Your Business/ProprietorToCompany";
import ProprietorToPartner from "./routes/Convert Your Business/ProprietorToPartner";
import GstAnnualReturn from "./routes/GST/GstAnnualReturn";
import GstAudit from "./routes/GST/GstAudit";
import GstCancellation from "./routes/GST/GstCancellation";
import GstNoticeReply from "./routes/GST/GstNoticeReply";
import GstRefund from "./routes/GST/GstRefund";
import GstReg from "./routes/GST/GstReg";
import GstReturnsFiling from "./routes/GST/GstReturnsFiling";
import ITAppealToCit from "./routes/IncomeTax/ITAppealToCit";
import ITAppealToItat from "./routes/IncomeTax/ITAppealToItat";
import ITAudit from "./routes/IncomeTax/ITAudit";
import ITFiling from "./routes/IncomeTax/ITFiling";
import ITNoticeReply from "./routes/IncomeTax/ITNoticeReply";
import ITReturns from "./routes/IncomeTax/ITReturns";
import ITScrutiny from "./routes/IncomeTax/ITScrutiny";
import Darpanreg from "./routes/LicensesAndReg/Darpanreg";
import DigitalSignCertificate from "./routes/LicensesAndReg/DigitalSignCertificate";
import EsiReg from "./routes/LicensesAndReg/EsiReg";
import FcraReg from "./routes/LicensesAndReg/FcraReg";
import IecCode from "./routes/LicensesAndReg/IecCode";
import MsmeReg from "./routes/LicensesAndReg/MsmeReg";
import ProfessionalTaxReg from "./routes/LicensesAndReg/ProfessionalTaxReg";
import ProvidentFundReg from "./routes/LicensesAndReg/ProvidentFundReg";
import Section12A80GReg from "./routes/LicensesAndReg/Section12A80GReg";
import ShopsEstablishmentsReg from "./routes/LicensesAndReg/ShopsEstablishmentsReg";
import StartupReg from "./routes/LicensesAndReg/StartupReg";
import TradeLicense from "./routes/LicensesAndReg/TradeLicense";
import AddDesignatedPartner from "./routes/Partnership Compliances/AddDesignatedPartner";
import AnnualLlpRocCompliance from "./routes/Partnership Compliances/AnnualLlpRocCompliance";
import ChangeToPartnershipAgreement from "./routes/Partnership Compliances/ChangeToPartnershipAgreement";
import DissolutionOfPartnershipFirm from "./routes/Partnership Compliances/DissolutionOfPartnershipFirm";
import PartnershipAudit from "./routes/Partnership Compliances/PartnershipAudit";
import RemoveDesignatedPartner from "./routes/Partnership Compliances/RemoveDesignatedPartner";
import WindingUpOfLlp from "./routes/Partnership Compliances/WindingUpOfLlp";
import OnePersonCompanyReg from "./routes/StartYourBussiness/OnePersonCompanyReg";
import PartnershipFirmReg from "./routes/StartYourBussiness/PartnershipFirmReg";
import PrivateCompanyReg from "./routes/StartYourBussiness/PrivateCompanyReg";
import PublicCompanyReg from "./routes/StartYourBussiness/PublicCompanyReg";
import SectionCompanyReg from "./routes/StartYourBussiness/SectionCompanyReg";
import SocietyReg from "./routes/StartYourBussiness/SocietyReg";
import TrustReg from "./routes/StartYourBussiness/TrustReg";
import BusniessValuation from "./routes/Valuation Services/BusniessValuation";
import IntangiblesValuation from "./routes/Valuation Services/IntangiblesValuation";
import MAValuations from "./routes/Valuation Services/MAValuations";
import StartUpValuation from "./routes/Valuation Services/StartUpValuation";
import ValuationUnderCompaniesAct from "./routes/Valuation Services/ValuationUnderCompaniesAct";
import VirtualCfoSoln from "./routes/VirtualCfoSolutions/VirtualCfoSoln";


const App = () => {
  return (
    <Router>
      <div className="hero-section-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/m-and-a-valuations" element={<MAValuations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
