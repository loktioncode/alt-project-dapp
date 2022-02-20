// import React from 'react';

// const TimeLine = ({ setObserver, callback }) => {
//     const timeline = useRef(null);
  
//     const someCallback = () => {
//       callback();
//     };
  
//     useEffect(() => {
//       if (timeline.current) {
//         setObserver(timeline.current, someCallback);
//       }
//     }, []);
  
//     return <div id="timeline100500" ref={timeline} className="timeline">
//         <ul>
//           <RoadMapItem title="Launch" text="Launch our 3000 NFT Pills to the community and get listed on Secondary marketplaces" />
//           <RoadMapItem title="Donate" text="Donate 5% of mint to a Charity that helps provide healthcare to all walks of life during this Covid Pandemic" />
//           <RoadMapItem title="DAO" text="The DAO will allow members to vote on the direction and suggest campaigns that will benefit our members. " textsecond="15% of all primary sales and 70% of the secondary sales will go into the DAO/Community Wallet." />
//           <RoadMapItem title="Collab Pills" text="We will release 1/1 hand designed pills in collaboration with various NFT projects, influencers and brands every week where the collection will be exclusively raffles for our pill holders before its being auctioned to the market.20% of this sales will go into the DAO/Community Wallet." />
//           <RoadMapItem title="AirDrop" text="Owning all 3 different factions of our pills for our project, we will Airdrop you a custom made Pill of your choice!"/>
//           <RoadMapItem title="Merchandise Store" text="A Merchandise Store will be launched where a percentage of the sales goes back to the DAO community wallet. *Sneak peaks coming soon*"/>
//           <RoadMapItem title="Medium starMedium starPhase 2Medium starMedium star" text="Coming soon"/>
//           </ul>
//     </div>;
//   };

//   export default TimeLine