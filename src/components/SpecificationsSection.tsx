import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SpecificationsSection = () => {
  const specifications = [
    {
      category: 'Structure & Foundation',
      items: [
        'RCC framed structure with earthquake resistant design',
        'Foundation as per soil test report by approved structural consultant',
        'External walls in 6" solid concrete blocks',
        'Internal walls in 4" solid concrete blocks'
      ]
    },
    {
      category: 'Flooring & Finishes',
      items: [
        'Living, dining & bedrooms: Vitrified tiles (2ft x 2ft)',
        'Kitchen: Anti-skid ceramic tiles',
        'Bathrooms: Anti-skid ceramic tiles with dado up to 7ft height',
        'Balconies: Anti-skid tiles'
      ]
    },
    {
      category: 'Doors & Windows',
      items: [
        'Main door: Teak wood frame with flush door shutters',
        'Internal doors: Sal wood frame with flush door shutters',
        'Windows: UPVC windows with clear glass',
        'Hardware: Godrej or equivalent make'
      ]
    },
    {
      category: 'Kitchen & Bathrooms',
      items: [
        'Kitchen: Granite platform with stainless steel sink',
        'Bathrooms: CP fittings of Kohler or equivalent',
        'Sanitary ware: Wall hung WC, wash basin',
        'Hot & cold water mixer in all bathrooms'
      ]
    },
    {
      category: 'Electrical & Safety',
      items: [
        'Concealed copper wiring with modular switches',
        'Power backup for common areas and lifts',
        'Fire fighting systems as per NBC norms',
        'Intercom facility for each apartment'
      ]
    },
    {
      category: 'Parking & Lifts',
      items: [
        'Covered car parking space for each unit',
        'High-speed passenger lifts (2 per tower)',
        'CCTV surveillance in common areas',
        'Professional security services 24x7'
      ]
    }
  ];

  return (
    <section className="py-16 bg-brand-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Premium quality materials and world-class specifications for lasting comfort
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {specifications.map((spec, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-brand-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-text hover:no-underline">
                  {spec.category}
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-brand-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button variant="cta" size="lg" className="px-8">
              Download Complete Specifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;