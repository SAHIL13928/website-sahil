import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import { FAQS } from "../constants/faq";

const FaqSection = () => {
    return (
        <div className={'faq-section main-section'}>
            <h1 className={'title red-text'}>FAQs</h1>
            <Accordion preExpanded={[0]} allowZeroExpanded className={'accordion-container prevent-select'} style={{ color: "black" }}>
                {
                    FAQS.map((faq, index) => (
                        <AccordionItem className={'acc-item'} uuid={index} key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton className={'acc-button'}>
                                    <AccordionItemState>
                                        {({ expanded }) => (
                                            <>
                                                <img id='plus-minus' src={expanded ? '/ImagesUnread/Minus.svg' : '/ImagesUnread/Add.svg'} alt={''} />
                                                <h1 id={faq.id}>{faq.question}</h1>
                                            </>
                                        )}
                                    </AccordionItemState>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemState>
                                {({ expanded }) => (
                                    expanded && (
                                        <div>
                                            <AccordionItemPanel>
                                                <p className={'acc-answer'}>{faq.answer}</p>
                                            </AccordionItemPanel>
                                        </div>
                                    )
                                )}
                            </AccordionItemState>
                        </AccordionItem>
                    ))
                }
            </Accordion>
            <h1 className={'footer-title'}>Have more questions?</h1>
            <p className={'support-text'}>Sure! Please reach out to the team at <span id='email-Id' className={'red-text'}>growth@unread.club</span></p>
        </div>
    );
};

export default FaqSection;