import Header from '../src/components/Header/Header';
import Hero from '../src/components/Hero/Hero';
import Companies from '../src/components/Companies/Companies';
import '../src/App.css';
import Residencies from '../src/components/Residencies/Residencies';
import Value from '../src/components/Value/Value';
// import Contact from '../src/components/Contact/Contact';
// import GetStarted from '../src/components/GetStarted/GetStarted';
// import Footer from '../src/components/Footer/Footer';
import { MdOutlineHomeWork, MdOutlineAnalytics, MdOutlineBugReport, MdOutlineCalculate, MdOutlineBuildCircle } from 'react-icons/md';
import AboutUs from '../src/components/about-us/AboutUs';
import ContactAndFooter from '../src/components/Contact/ContactFooter';
import ValueAddedSection from '../src/components/ValueAddedSection/ValueAddedSection';
import WhoWeAre from '../src/components/WhoAreWe/WhoAreWe';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import CareersPage from '../src/components/Careers/Careers';

function Home() {
  
  // Service data for each Value component
  const designManagementData = [
    {
      icon: <MdOutlineHomeWork/>,
      heading: "BEP Development",
      detail: "Creation of comprehensive design roadmaps and strategic planning documents."
    },
    {
      icon: <MdOutlineHomeWork/>,
      heading: "Process Definition",
      detail: "Establishing clear design workflows, role responsibilities, and required deliverables."
    },
    {
      icon: <MdOutlineHomeWork/>,
      heading: "Collaboration Framework",
      detail: "Implementing systems for effective coordination between design teams and stakeholders."
    },
    {
      icon: <MdOutlineHomeWork/>,
      heading: "Documentation & Scheduling",
      detail: "Creating detailed timelines for drawings and technical documents from each discipline."
    },
    {
      icon: <MdOutlineHomeWork/>,
      heading: "Progress Monitoring",
      detail: "Regular tracking of design development with structured reporting mechanisms."
    },
    {
      icon: <MdOutlineHomeWork/>,
      heading: "Change Management",
      detail: "Implementing formal procedures to handle design modifications and revisions efficiently."
    }
  ];

  const designReviewData = [
    {
      icon: <MdOutlineAnalytics/>,
      heading: "Systematic Review Process",
      detail: "Implementing checklist-based evaluations focusing on design quality, regulatory compliance, and adherence to project requirements."
    },
    {
      icon: <MdOutlineAnalytics/>,
      heading: "Deficiency Identification",
      detail: "Thorough assessment to detect and document design inconsistencies requiring resolution."
    },
    {
      icon: <MdOutlineAnalytics/>,
      heading: "Quality Evaluation",
      detail: "Comprehensive assessment of overall design standards and excellence."
    }
  ];

  const clashDetectionData = [
    {
      icon: <MdOutlineBugReport/>,
      heading: "Matrix-Based Conflict Detection",
      detail: "Systematic identification of spatial and functional conflicts using predefined detection parameters."
    },
    {
      icon: <MdOutlineBugReport/>,
      heading: "Open BIM Collaboration",
      detail: "Implementation of vendor-neutral data exchange for seamless multi-disciplinary coordination."
    },
    {
      icon: <MdOutlineBugReport/>,
      heading: "Visual Conflict Reporting",
      detail: "Comprehensive documentation of detected clashes with visual representations for efficient resolution."
    }
  ];

  const quantityTakeoffData = [
    {
      icon: <MdOutlineCalculate/>,
      heading: "Smart Quantification Rules",
      detail: "Implementation of automated classification and measurement systems for accurate material estimation."
    },
    {
      icon: <MdOutlineCalculate/>,
      heading: "BIM-Driven Documentation",
      detail: "Generation of comprehensive quantity takeoffs and bills of quantities directly from digital building models."
    },
    {
      icon: <MdOutlineCalculate/>,
      heading: "Dynamic Reporting System",
      detail: "Regular model updates with visual quantification reports, cost classification analysis, and intelligent scheduling capabilities."
    }
  ];

  const integratedBIMData = [
    {
      icon: <MdOutlineBuildCircle/>,
      heading: "Intelligent Quantity Systems",
      detail: "Implementation of automated classification and quantification rule-sets for streamlined material takeoffs."
    },
    {
      icon: <MdOutlineBuildCircle/>,
      heading: "Model-Based Documentation",
      detail: "Generation of comprehensive quantity and cost documentation derived directly from BIM data."
    },
    {
      icon: <MdOutlineBuildCircle/>,
      heading: "Analytical Reporting Framework",
      detail: "Regular model updates with visual quantity reports, cost-based classifications, and intelligent scheduling capabilities."
    }
  ];

  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      {/* <h1 className='v-container text-4xl font-bold primaryText paddings innerWidth flexCenter'>OUR PARTNERS</h1> */}
      <Companies/>
      <Residencies/>
      <AboutUs/>

      

      <h1 className='v-container text-4xl font-bold primaryText paddings innerWidth'>OUR SERVICES</h1>
      {/* Design Management */}

      
      <Value 
        show={true} 
        title="1. BIM MANAGEMENT"
        subtitle="Expert BIM Coordination Services"
        description="We provide comprehensive management services to ensure your project runs smoothly from concept to completion."
        accordionData={designManagementData}
        imagePath="./design-management.png"
      />
      
      {/* Design Review Analysis */}
      <Value 
        show={false} 
        title="2. DESIGN REVIEW ANALYSIS"
        subtitle="Technical Design Control & Quality Assurance"
        description="Our thorough design review process ensures compliance with codes, regulations, and project requirements while maintaining design quality."
        accordionData={designReviewData}
        imagePath="./design-review.png"
      />
      
      {/* Clash Detection */}
      <Value 
        show={true} 
        title="3. CLASH DETECTION ANALYSIS"
        subtitle="Advanced Conflict Resolution"
        description="We identify and resolve spatial and systems conflicts before construction, saving time and reducing costly on-site changes."
        accordionData={clashDetectionData}
        imagePath="./clash-detection.png"
      />
      
      {/* Quantity Takeoff */}
      <Value 
        show={false} 
        title="4. QUANTITY TAKEOFF ANALYSIS"
        subtitle="Precise Material Estimation & Cost Control"
        description="Our model-based quantity takeoff provides accurate material quantities and cost estimates directly from your BIM models."
        accordionData={quantityTakeoffData}
        imagePath="./quantity-takeoff.png"
      />
      
      {/* Integrated BIM */}
      <Value 
        show={true} 
        title="6. INTEGRATED BIM DESIGN"
        subtitle="Comprehensive BIM Solutions"
        description="Our integrated BIM approach combines design, documentation, and analysis in a single collaborative environment."
        accordionData={integratedBIMData}
        imagePath="./integrated-bim.png"
      />

      <WhoWeAre/>

      <ValueAddedSection/>
      
      
      {/* <AboutUs/> */}
      {/* <div className="white-gradient"/> */}
      {/* <Contact/> */}
      {/* <GetStarted/> */}
      {/* <Footer/> */}
      {/* <ContactAndFooter/> */}
      
    </div>
  );
}

export default Home;