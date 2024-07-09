import { Route, Routes } from "react-router-dom"
import AccountingBookKeeping from "./Accounting Services/AccountingBookKeeping";
import FinancialDueDiligence from "./Accounting Services/FinancialDueDiligence";
import PayrollServices from "./Accounting Services/PayrollServices";
import RetirementPlanning from "./Accounting Services/RetirementPlanning";
import AnnualCompanyRocCompliance from "./Company Compliances/AnnualCompanyRocCompliance";
import AppointmentOfDir from "./Company Compliances/AppointmentOfDir";
import ChangeInAddress from "./Company Compliances/ChangeInAddress";
import ChangeInObjectClause from "./Company Compliances/ChangeInObjectClause";
import ClosureCompany from "./Company Compliances/ClosureCompany";
import CompanyAudit from "./Company Compliances/CompanyAudit";
import IncAuthorizedCapital from "./Company Compliances/IncAuthorizedCapital";
import ResignationOfDir from "./Company Compliances/ResignationOfDir";
import ShareTransferOfCompany from "./Company Compliances/ShareTransferOfCompany";
import StrikeOffCompany from "./Company Compliances/StrikeOffCompany";
import PartnerCompany from "./Convert Your Business/PartnerCompany";
import PrivateToPublic from "./Convert Your Business/PrivateToPublic";
import ProprietorToCompany from "./Convert Your Business/ProprietorToCompany";
import ProprietorToPartner from "./Convert Your Business/ProprietorToPartner";
import GstAnnualReturn from "./GST/GstAnnualReturn";
import GstAudit from "./GST/GstAudit";
import GstCancellation from "./GST/GstCancellation";
import GstNoticeReply from "./GST/GstNoticeReply";
import GstRefund from "./GST/GstRefund";
import GstReg from "./GST/GstReg";
import GstReturnsFiling from "./GST/GstReturnsFiling";
import ITAppealToCit from "./IncomeTax/ITAppealToCit";
import ITAppealToItat from "./IncomeTax/ITAppealToItat";
import ITAudit from "./IncomeTax/ITAudit";
import ITFiling from "./IncomeTax/ITFiling";
import ITNoticeReply from "./IncomeTax/ITNoticeReply";
import ITReturns from "./IncomeTax/ITReturns";
import ITScrutiny from "./IncomeTax/ITScrutiny";
import Darpanreg from "./LicensesAndReg/Darpanreg";
import DigitalSignCertificate from "./LicensesAndReg/DigitalSignCertificate";
import EsiReg from "./LicensesAndReg/EsiReg";
import FcraReg from "./LicensesAndReg/FcraReg";
import IecCode from "./LicensesAndReg/IecCode";
import MsmeReg from "./LicensesAndReg/MsmeReg";
import ProfessionalTaxReg from "./LicensesAndReg/ProfessionalTaxReg";
import ProvidentFundReg from "./LicensesAndReg/ProvidentFundReg";
import Section12A80GReg from "./LicensesAndReg/Section12A80GReg";
import ShopsEstablishmentsReg from "./LicensesAndReg/ShopsEstablishmentsReg";
import StartupReg from "./LicensesAndReg/StartupReg";
import TradeLicense from "./LicensesAndReg/TradeLicense";
import AddDesignatedPartner from "./Partnership Compliances/AddDesignatedPartner";
import AnnualLlpRocCompliance from "./Partnership Compliances/AnnualLlpRocCompliance";
import ChangeToPartnershipAgreement from "./Partnership Compliances/ChangeToPartnershipAgreement";
import DissolutionOfPartnershipFirm from "./Partnership Compliances/DissolutionOfPartnershipFirm";
import PartnershipAudit from "./Partnership Compliances/PartnershipAudit";
import RemoveDesignatedPartner from "./Partnership Compliances/RemoveDesignatedPartner";
import WindingUpOfLlp from "./Partnership Compliances/WindingUpOfLlp";
import OnePersonCompanyReg from "./StartYourBussiness/OnePersonCompanyReg";
import PartnershipFirmReg from "./StartYourBussiness/PartnershipFirmReg";
import PrivateCompanyReg from "./StartYourBussiness/PrivateCompanyReg";
import PublicCompanyReg from "./StartYourBussiness/PublicCompanyReg";
import SectionCompanyReg from "./StartYourBussiness/SectionCompanyReg";
import SocietyReg from "./StartYourBussiness/SocietyReg";
import TrustReg from "./StartYourBussiness/TrustReg";
import BusniessValuation from "./Valuation Services/BusniessValuation";
import IntangiblesValuation from "./Valuation Services/IntangiblesValuation";
import MAValuations from "./Valuation Services/MAValuations";
import StartUpValuation from "./Valuation Services/StartUpValuation";
import ValuationUnderCompaniesAct from "./Valuation Services/ValuationUnderCompaniesAct";
import VirtualCfoSoln from "./VirtualCfoSolutions/VirtualCfoSoln";


const Pages = () => {
    return (
        <Routes>
            <Route path="/m-and-a-valuations" element={<MAValuations />} />
            <Route path="/private-limited-company-registration" element={<PrivateCompanyReg />} />
            <Route path="/public-limited-company-registration" element={<PublicCompanyReg />} />
            <Route path="/one-person-company-registration" element={<OnePersonCompanyReg />} />
            <Route path="/section8-company-registration" element={<SectionCompanyReg />} />
            <Route path="/partnership-firm-registration" element={<PartnershipFirmReg />} />
            <Route path="/society-registration" element={<SocietyReg />} />
            <Route path="/trust-registration" element={<TrustReg />} />
            <Route path="/gst-registration" element={<GstReg />} />
            <Route path="/gst-returns-filing" element={<GstReturnsFiling />} />
            <Route path="/gst-refund" element={<GstRefund />} />
            <Route path="/gst-annual-return" element={<GstAnnualReturn />} />
            <Route path="/gst-notice-reply" element={<GstNoticeReply />} />
            <Route path="/gst-audit" element={<GstAudit />} />
            <Route path="/gst-cancellation" element={<GstCancellation />} />
            <Route path="/income-tax-returns" element={<ITReturns />} />
            <Route path="/income-tax-notice-reply" element={<ITNoticeReply />} />
            <Route path="/income-tax-scrutiny" element={<ITScrutiny />} />
            <Route path="/income-tax-appeal-to-cit" element={<ITAppealToCit />} />
            <Route path="/income-tax-appeal-to-itat" element={<ITAppealToItat />} />
            <Route path="/income-tax-audit" element={<ITAudit />} />
            <Route path="/income-tax-filing" element={<ITFiling />} />
            <Route path="/virtual-cfo-solutions" element={<VirtualCfoSoln />} />
            <Route path="/startup-registration" element={<StartupReg />} />
            <Route path="/msme-registration" element={<MsmeReg />} />
            <Route path="/iec-code" element={<IecCode />} />
            <Route path="/trade-license" element={<TradeLicense />} />
            <Route path="/digital-signature-certificate" element={<DigitalSignCertificate />} />
            <Route path="/provident-fund-registration" element={<ProvidentFundReg />} />
            <Route path="/esi-registration" element={<EsiReg />} />
            <Route path="/professional-tax-registration" element={<ProfessionalTaxReg />} />
            <Route path="/shops-establishments-license" element={<ShopsEstablishmentsReg />} />
            <Route path="/darpan-registration" element={<Darpanreg />} />
            <Route path="/fcra-registration" element={<FcraReg />} />
            <Route path="/section-12a-80g-registration" element={<Section12A80GReg />} />
            <Route path="/annual-company-roc-compliance" element={<AnnualCompanyRocCompliance />} />
            <Route path="/company-audit" element={<CompanyAudit />} />
            <Route path="/appointment-of-director" element={<AppointmentOfDir />} />
            <Route path="/resignation-of-director" element={<ResignationOfDir />} />
            <Route path="/increase-authorized-capital" element={<IncAuthorizedCapital />} />
            <Route path="/share-tansfer-of-a-Company" element={<ShareTransferOfCompany />} />
            <Route path="/closure-the-company" element={<ClosureCompany />} />
            <Route path="/strike-off-company" element={<StrikeOffCompany />} />
            <Route path="/change-in-object-clause" element={<ChangeInObjectClause />} />
            <Route path="/change-in-address" element={<ChangeInAddress />} />
            <Route path="/annual-llp-roc-compliance" element={<AnnualLlpRocCompliance />} />
            <Route path="/partnership-or-llp-audit" element={<PartnershipAudit />} />
            <Route path="/add-designated-partner" element={<AddDesignatedPartner />} />
            <Route path="/remove-designated-partner" element={<RemoveDesignatedPartner />} />
            <Route path="/changes-to-partnership-agreement" element={<ChangeToPartnershipAgreement />} />
            <Route path="/dissolution-of-partnership-firm" element={<DissolutionOfPartnershipFirm />} />
            <Route path="/winding-up-of-llp" element={<WindingUpOfLlp />} />
            <Route path="/proprietorship-to-patnership-llp" element={<ProprietorToPartner />} />
            <Route path="/proprietorship-to-company" element={<ProprietorToCompany />} />
            <Route path="/partnership-or-llp-company" element={<PartnerCompany />} />
            <Route path="/private-to-public-company" element={<PrivateToPublic />} />
            <Route path="/accounting-and-book-keeping" element={<AccountingBookKeeping />} />
            <Route path="/financial-due-diligence" element={<FinancialDueDiligence />} />
            <Route path="/payroll-services" element={<PayrollServices />} />
            <Route path="/retirement-planning" element={<RetirementPlanning />} />
            <Route path="/business-valuation-services" element={<BusniessValuation />} />
            <Route path="/intangibles-valuation-services" element={<IntangiblesValuation />} />
            <Route path="/valuation-under-companies-act" element={<ValuationUnderCompaniesAct />} />
            <Route path="/startup-valuation" element={<StartUpValuation />} />


        </Routes>
    )
}

export default Pages
