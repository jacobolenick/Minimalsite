document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const projectCards = document.querySelectorAll('.project-card');

    const projectDetails = {
        1: {
            title: 'AXS B2B Software',
            content: `
                <h2>AXS | Internal tool for ticket teller to sell event tickets</h2>
                <div class="project-pills">
                    <span class="pill">2021</span>
                    <span class="pill">UX/UI Design</span>
                    <span class="pill">UX Research</span>
                </div>
                <div class="modal-image-container">
                    <img src="axs123.jpg" alt="AXS B2B Software">
                </div>
                <div class="modal-text-content">
                    <p>I was part of a team that was tasked with redesigning a functional product that hadn't been updated in 16 years. The project had a tight deadline of 3 months, and the goal was to create usable software that would bring in revenue for the company, either through its own brand or through white labeling to other companies.</p>
                     <p>To gather insights and inform our design decisions, I worked with a team of researchers to interview real users on a weekly basis. I also needed to balance the desire to create a fresh and new design with the need to maintain some degree of familiarity for users who had been using the product for 16 years.</p>
                      <p>To test my designs, I created low-fidelity mockups and prototypes using tools like Zeplin and Sketch and then tested those designs with real, active users. Through this project, I learned how to solve complex problems as part of a team of designers.</p>
                      <img src="axs005.jpg" alt="AXS B2B Software">
                      <img src="axs006.jpg" alt="AXS B2B Software">
                    <h3>Defining the problems with the old Inventory software</h3>
                    <p>The old software was not accessible. Our users said they would get eye strain from looking at the small text and bright white background in the dark while at the ticketing booth.</p>
                     <p>There wasn't a great way of quickly searching venues and events or handling triage.</p>
                      <p>Another problem with the old software was there wasn't a way to search by Ticket Type, Comps, VIP, Handicap Accessible, Different Tiers, etc.</p>
                      <img src="axs007.jpg" alt="AXS B2B Software">
                      <img src="axs008.jpg" alt="AXS B2B Software">
                      <img src="2.jpg" alt="AXS B2B Software">
                    <h3>Fixing the seat map experience</h3>
                    <p>Through extensive user interviews and usability testing, we identified key pain points in the existing ticketing system. Users struggled with complex navigation, lack of customization options, and inefficient data entry processes. These insights guided our design decisions throughout the project.</p>
                     <p>We also added a layers button with a pop-out for a much better experience. I came up with this idea so you can filter by seat type, such as(Disabled, Comps, Price point, etc.) This makes it much easier for the ticket agents to find the right seat for each individual.</p>
                      <p>We ran user testing with our real active users on these views and features, and they found them to be significantly better and easier to use than our previous 16-year-old software.</p>
                      <img src="3.jpg" alt="AXS B2B Software">
                      <img src="4.jpg" alt="AXS B2B Software">

                    <h3>The user goal for inventory was to make the ticket sellers' jobs much easier.</h3>
                    <p>The old software was clunky and lagged. It wasn't designed to handle the day-to-day tasks the tellers faced daily in 2021.</p>
                     <p>We ran user tests on a few different colorways for the refresh. Ultimately, we settled on this dark blue colorway because it is accessible and easy on the eyes in dimly lit rooms.p>
                      <p>For our pricing team, we added tools that recommend ticket pricing changes to make their jobs easier. This was a highly requested feature from that side of the company.</p>
                       <img src="5.jpg" alt="AXS B2B Software">
                       <img src="6.jpg" alt="AXS B2B Software">

                       <h3>Shifting the focus to a search-based product</h3>
                    <p>Before the redesign, the product wasn't focused on search functionality, and our stakeholders wanted to change this. With my intuition that search should be added, I spoke up and suggested it.</p>
                     <p>From dozens of user interviews that I helped conduct and facilitate, we quickly realized how important this feature would be.</p>
                      <p>Our Ticket Tellers, as well as pricing and triage teams, had a tough time doing their job without being able to search for names, events, and prices quickly.</p>
                       <p>We went through many iterations of this, created lo-fi mockups and prototypes using Figma and Zeplin, and tested them on the users we initially interviewed in the research phase.</p>
                       <p>We found a great solution, and our users found that what we came to for this solution heavily impacted their workflow and made it much easier to get the job done in a fraction of the time.</p>
                </div>
            `
        },
        2: {
            title: 'Crtside: Get scholarships as a basketball athlete',
            content: `
                <h2>Crtside: Get scholarships as a basketball athlete</h2>
                <div class="project-pills">
                    <span class="pill">2022</span>
                    <span class="pill">Mobile App</span>
                    <span class="pill">UX Design</span>
                </div>
                <div class="modal-image-container">
                    <img src="crt1.jpg" alt="Crtside Project">
                </div>
                <div class="modal-text-content">
                    <p>I was the lead Product Designer at Crt Side, helping drive the design for the startup. The CEO's and business goals were to design a beautiful app and prototype MVP for them to secure some funding to hire a remote developer team and then build the MVP Product.</p>
                    <p>The company was able to secure its funding but shut down soon after.</p>
                    <p>My design process was a little different than how I would go about it at my full-time job. Since I was brought in as a freelancer and was the sole designer, I had a lot of freedom, but we also didn't have many resources.</p>
                    <p>I would have weekly meetings with the CEO and Marketing Director to discuss what features they'd love to add. I would then take the week to design them.</p>
                    <p>I noticed I was reusing parts over and over, so I took the initiative to build out a small starter Design System and component library.</p>
                    <p>I would build these components using Figma's auto-layout feature to ensure that my designs were consistent.</p>
                    <p>After I finished a few features, I would prototype what we had so far and share that with the stakeholders and management team.</p>
                    <p>We did have a few athletes who would use the app when it launched and would test the prototypes, and we would run features by them as a small user research operation.</p>
                    <img src="crt4.jpg" alt="Crtside Project">
                    <img src="crt2-min.jpg" alt="Crtside Project">
                    <h3>Prototype</h3>
                    <div class="video-container">
                        <video id="crtside-video" width="100%" controls>
                            <source src="videocrt.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <button id="play-pause-btn" class="video-control-btn">Play/Pause</button>
                    </div>
                </div>
            `
        },
        3: {
            title: 'Easily manage your organization and allocations',
            content: `
                <h2>Easily manage your organization and allocations</h2>
                <div class="project-pills">
                    <span class="pill">2022</span>
                    <span class="pill">SaaS App</span>
                    <span class="pill">UX/UI Design</span>
                </div>
                <div class="modal-image-container">
                    <img src="org1.jpg" alt="Project 3">
                </div>
                <div class="modal-text-content">
                    <p>For a few months, I worked as a UX Design consultant for Artium, which at that time had Orgspace as a client.</p>
                    <p>They wanted a redesign of their outdated existing product. </p>
                    <img src="orgspace - create.jpg" alt="Project 3">
                    <img src="orgspace - activate.jpg" alt="Project 3">
        
                    <p>I suggested having a demo mode so organizations can see how the product would work with it filled with data. </p>
                   <p>We've noticed a significantly lower percentage of customers continue on past their free trial and sign up for the product due to this suggestion of mine. </p>
                    <img src="orgspace003.jpg" alt="Project 3">
                    <img src="orgspace004.jpg" alt="Project 3">
                    <h3>Problem</h3>
                    <p>Orgspace is a software company that provides a platform for businesses to manage their organizations. They had previously raised a few million dollars to build their MVP product but struggled to get users to adopt it. Their main problem was that the onboarding process was too complicated and time-consuming. As a result, many users were abandoning the product before they could even get started.</p>
                   <p>I chose to have the onboarding process the way I did because having overly complex onboarding flows doesn't make it easier for the user. Orgspace was having difficulty with dropoffs during the signup and onboarding phases.  </p>
                    <img src="or9.jpg" alt="Project 3">
                    <img src="Dashboard-demo-mode.jpg" alt="Project 3">
                    <h3>Solution</h3>
                    <p>I was brought on to redesign the user experience of Orgspace. I started by talking to the company's founders and understanding their goals for the product. I also conducted user research to identify the pain points that users were experiencing. Based on this information, I designed a new onboarding process that was simpler and more intuitive. I also created a demo mode that allowed users to try the product before committing to using it. In addition, I redesigned the org chart to make it easier for users to understand the structure of their organization.</p>
                   <img src="orgspace - staffing.jpg" alt="Project 3">
                    <p>I chose these modern and friendly cards for the org chart because the company's previous design had them outdated and did not have a visual hierarchy. </p>
                    <p>I decided to add tags if the team was understaffed and tags for the titles of the roles. </p>
                    <p>Stakeholders at the company really valued this design decision and backed me 100% on it. </p>
                    <p>I even suggested adding a map showing where employees work and their offices. This was loved by the CEO of the company and made its way into the new redesign. </p>
                    <h3>Recommendations</h3>
                    <p>I would recommend that Orgspace continue to invest in user experience design. By making the product easier to use, they can continue to improve user satisfaction and adoption. I would also recommend they continue conducting user research to identify and address pain points. By staying close to their users, they can ensure that the product is meeting their needs.</p>
                </div>
            `
        },
        4: {
            title: 'Project 4',
            content: `
                <h2>Project 4</h2>
                <div class="project-pills">
                    <span class="pill">2023</span>
                    <span class="pill">Web App</span>
                    <span class="pill">UX Design</span>
                </div>
                <div class="modal-image-container">
                    <img src="images/Wells Fargo.jpg" alt="Project 4">
                </div>
                <div class="modal-text-content">
                    <p>Detailed description of Project 4...</p>
                    <h3>Challenge</h3>
                    <p>Description of the challenges faced in Project 4...</p>
                    <h3>Solution</h3>
                    <p>Explanation of the solution implemented for Project 4...</p>
                    <h3>Results</h3>
                    <p>Overview of Project 4 results and impact...</p>
                    <img src="images/project4-detail1.jpg" alt="Project 4 Detail 1">
                    <img src="images/project4-detail2.jpg" alt="Project 4 Detail 2">
                </div>
            `
        },
        // Add more projects as needed
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectDetails[projectId];
            if (project) {
                modalBody.innerHTML = project.content;
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('show');
                    setupVideoControls(); // Call this function after the modal content is loaded
                }, 10);
            } else {
                console.error(`Project with id ${projectId} not found`);
            }
        });
    });

    closeBtn.onclick = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    };

    const shadowbox = document.getElementById('shadowbox');
    const shadowboxImage = document.getElementById('shadowbox-image');
    const closeShadowbox = document.querySelector('.close-shadowbox');

    // Function to open shadowbox
    function openShadowbox(imageSrc) {
        shadowboxImage.src = imageSrc;
        shadowbox.style.display = 'block';
    }

    // Close shadowbox when clicking the close button
    closeShadowbox.onclick = () => {
        shadowbox.style.display = 'none';
    }

    // Close shadowbox when clicking outside the image
    shadowbox.onclick = (event) => {
        if (event.target === shadowbox) {
            shadowbox.style.display = 'none';
        }
    }

    // Add click event to all images in the modal
    modalBody.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            openShadowbox(event.target.src);
        }
    });

    // Add this function to handle video play/pause
    function setupVideoControls() {
        const video = document.getElementById('crtside-video');
        const playPauseBtn = document.getElementById('play-pause-btn');

        if (video && playPauseBtn) {
            playPauseBtn.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }
    }
});
