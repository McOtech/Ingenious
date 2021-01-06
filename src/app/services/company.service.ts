import { Injectable } from '@angular/core';

export interface Good {
  id: string;
  image: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }
  getValues(): string[] {
    return [
      `Appreciate the fact that different customers require different solutions, and
      therefore work with our partners to develop bespoke products and services.
      We are therefore flexible and willing to adjust our range of solutions to meet
      customer requirements.`,
      `Many customers have benefitted f rom our expertise for example, in the
      identification of unforeseen scenarios and stress testing, which has then
      facilitated better and more cost-effective decision-making`,
      `We leverage our local and global supply and logistics networks to ensure
      rapid sourcing of the highest quality of supplies and ensure just-in-time
      delivery for mission-critical engagements. This approach ensures that goods
      and services are available when and where they are needed. This saves our
      customers f rom the losses and risks associated with prolonged warehousing
      periods.`,
      `Continued review and improvement of our management, sourcing and
      delivery systems to ensure timely and cost effective provision of products and
      services`
    ];
  }

  getGoods(): Good[] {
    return [
      {
        id: 'interior-designs',
        image: 'assets/img/service-1.png',
        title: 'Interior Designs',
        description: `Our commercial service is applicable to a wide range of installations -
        from hotels to safari camps, and f rom commercial spaces to residential blocks.
        We offer a unique package of interior design tools that includes complementary on-site
        consultancy across the entire spectrum of interior design and a professional quotation,
        logistics and installation service`
      },
      {
        id: 'automation-systems',
        image: 'assets/img/service-2.png',
        title: 'Automation Systems',
        description: 'We offer System automation services  that renders high performance to our clients and minimize on the operation cost of a company'

      },
      {
        id: 'financial-analysis',
        image: 'assets/img/service-3.png',
        title: 'Financial Analysis',
        description: `Ingenious Designs uses financial data to
        assess a company’s performance and make
        recommendations about how it can improve
        going forward. Our Financial Analysts primarily
        carry out their work in Excel, using a
        spreadsheet to analyze historical data and
        make projections of how they think the
        company will perform in the future.`
      },
      {
        id: 'marketing-analysis',
        image: 'assets/img/service-4.png',
        title: 'Marketing Analysis',
        description: `We offer quantitative and qualitative assessment of a market by looking into
        the size of the market both in volume and in value, the various customer
        segments and buying patterns, the competition, and the economic
        environment in terms of barriers to entry and regulation.
        The key objectives of the market analysis section is to give clients confidence
        in the market and know that its large enough to build a sustainable business`
      },
      {
        id: 'corporate-brand-development',
        image: 'assets/img/service-5.jpg',
        title: 'Corporate Brand Development',
        description: `Our brand development process will help you:
        Establish a strong brand identity
        We help you figure out “who” you are to ensure your manufacturing brand is consistent and
        engaging—so there is no “disconnect” between your brand promise and what your
        customers experience.
        Create a powerful and distinctive brand
        Express your brand through dynamic visual expression (logo, graphics, website) and brand
        narrative (positioning statement, messaging, content development).
        Develop brand loyalty
        Leverage your brand to attract customers, build loyal brand advocates, and increase sales.
        Successful brand development delivers a consistent and believable experience, and
        engages stakeholders who can be your best brand advocates.`
      },
      {
        id: 'human-resource-management',
        image: 'assets/img/service-6.png',
        title: 'Human Resource Management',
        description: `Our flexible, all-in-one employee experience and engagement solution gives leaders and
        managers the ease, speed, and confidence to take the right actions on the areas that matter
        the most to the success of the organization.
        With Ingenious Designs, you gain the insights and guidance necessary to drive
        organizational change in the most effective way, and improve productivity, retention, and
        employee engagement.
        Ingenious Designs is committed to your success`
      },
      {
        id: 'management-analysis',
        image: 'assets/img/service-7.png',
        title: 'Management Analysis',
        description: `Our Management Analysis process
        examines a company's culture and
        providing insights to the alignment of
        management groups with the company's
        goals and objectives.
        This information is used to analyze the
        human capital aspects expectations
        associated with an organization's
        long-term strategic objectives`
      },
      {
        id: 'legal-team',
        image: 'assets/img/service-8.png',
        title: 'Legal Team',
        description: `We are equipped with a modern legal
        team that works at the heart of an
        organisation and regarded as a key
        resource and valued business partner.
        The legal team talks the same
        language as its clients, understanding
        the business and demonstrating the
        value of its contribution to the
        organisation.`
      },
      {
        id: 'it-systems',
        image: 'assets/img/service-9.png',
        title: 'IT Systems',
        description: `Ingenious Designs Information
        Systems professionals are highly
        experienced and provide total
        information system solutions. We
        provide organizations with IT
        strategies for meeting needs of their
        business while maximizing return on
        technology investment. Working f rom
        an in-depth understanding of
        customers' business environments,
        we develop innovative information
        system solutions that fulfill present
        needs and anticipate future growth.
        We also offer comprehensive IT
        Security program management
        support services These include
        providing security planning, policy
        and procedures development,
        architecture design and development,
        intrusion detection and incident
        response`
      }
    ];
  }
}
