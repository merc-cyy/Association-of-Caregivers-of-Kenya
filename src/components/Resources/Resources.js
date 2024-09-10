
import React from 'react';
import '../../styles/globals.css';


const Resources = () => {
    return (
        <>
    <div className="resources-image">
        <div className='about-content'>
            <div className='content'>
                <h1 className='content-title'>RESOURCES</h1>
                <p className='content-paragraph'>Explore our comprehensive resources designed to empower, inform, and support you on your caregiving journey.</p>
            </div>
        </div>
    </div>

    <div className="resources-container">
      {/* Sidebar Navigation */}
      <aside className="resources-nav">
        <h2>Resources</h2>
        <ul>
          <li><a href="#section1">Primary Caregivers</a></li>
          <li><a href="#section6">Secondary Caregivers</a></li>
          <li><a href="#section7">Survey Results</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="resources-content">
        {/* Each section corresponds to a link in the sidebar */}
        <section className='section-card'>
            <h1>Types of Caregivers</h1>
            <p>Understanding the categories of caregivers helps in understanding the challenges that arise within a family around caregiving.It is possible for a caregiver to belong to more than one category. 
                In addition, each category of caregiving comes with it’s own kind of stress</p>
        </section>
        <section id="section1" className='section-card'>
            <h2>Primary Caregivers</h2>
            <p>The family member who takes the most active role in caregiving. They often help with activities of daily living (ADLs) like personal hygiene, dressing, movement.
                 They also handle a lot of instrumental activities of daily living (IADLs) like taking medication, housework, shopping, transport and using equipment or technology.
            </p>
        </section>

        <section id="section2" className='section-card'>
            <h2>Alpha caregiver</h2>
            <p>This is often the final decision maker on how family caregiving will be provided, even though they may not be the ones providing the daily care. 
            This may be shaped by things like cultural influences, the position they have in the family, their financial capability or their personality.
            </p>
        </section>

        <section id="section3" className='section-card'>
          <h2>Co-resident Caregivers</h2>
          <p>In-home or co-resident caregivers live with the family member in need of care. Co-residency by itself does not automatically translate to caregiving as it is possible for several family members to live with a care recipient but not all are engaged in the caregiving role. 
            They are often the primary family caregiver and help with activities of daily living (ADLs) and instrumental activities of daily living (IADLs).</p>
        </section>

        <section id="section4" className='section-card'>
            <h2>Long Distance Caregivers</h2>
            <p>Those who live an hour or more away from the person being cared for.
                Very importantly, where there is a co-resident family caregiver, they may provide emotional support and respite for him/her.
            </p>
        </section>

        <section id="section5" className='section-card'>
            <h2>Nearby Caregivers</h2>
            <p>Live less than 1 hour away from their care recipient and may provide support for both activities of daily living (ADLs) and instrumental activities of daily living (IADLs).
            </p>
        </section>

        <section id="section6" className='section-card'>
            <h2>Secondary caregivers</h2>
            <p>This refers to all caregivers that are not primary caregivers. 
            </p>
        </section>

        <section id="section7" className='section-card'>
            <h2>Survey Results</h2>
            <p>These are some of the things participants said as being part of their caregiving experience:</p> 
            <ul>
                <li>Overwhelming</li>
                <li>Exhausting</li>
                <li>Most difficult task ever done</li>
                <li>Lonely</li>
                <li>Wrong decisions</li>
                <li>Depressing</li>
                <li>Loss of personal space</li>
                <li>Financially draining</li>
                <li>Lack of social life</li>
                <li>Being misunderstood</li>
                <li>Caregiving chooses you; you don’t chose it</li>
            </ul>
        </section>
        


      </main>
    </div>
    </>
  );
};

export default Resources;
