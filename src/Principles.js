import React from 'react';
import {
  Box, TitleText, Image, CenterAlign,
} from './App.styles';

import ImgPrinciples from './images/principles.png';

export function Principles() {
  return (
    <>
      <TitleText>Principles</TitleText>
      <Box>
        <CenterAlign>
          <Image alt="principles-pyramid" src={ImgPrinciples} />
        </CenterAlign>
        <h2>
          1. Deliver nothing that doesn't add value to the user
        </h2>
        <p>
          This is our highest priority guiding principle. It means that we should focus on delivering value to users and prioritise delivery by user value.
        </p>

        <p>Examples:</p>
        <p>
          Erso are asked to add a new feature which includes Add, Edit and Delete. We prioritise these as Add, Delete and then Edit, because in terms of user value we are determining that the ability to Add and Delete give users value sooner.
          An Erso is working on a new feature such as a URL parser, they start to consider all the ways in which they can achieve the URL parsing logic. A guide for them here would be, what is important to the goal of adding value to the user. The user doesn't care if you use a reduce, or a bunch of maps etc. What they care about is that they can do their job issue free.
          What it means for our stakeholders?
        </p>

        <p>
          Product: We will often engage with product in a way that tries to understand the user value in a ticket. This is to allow us to make delivery decisions around that value.
        </p>

        <p>
          Services Engineering: We will talk about API's from the point of view of user value, trying to focus any dependencies in a way that prioritises the user value we understand.
        </p>

        <hr />
        <h2>2. Seek the fastest path to feedback</h2>
        <p>
          Our second principle and very much a fundamental part of agile. Where we look to get the fastest feedback possible.
        </p>

        <p>
          Examples:
          Write complex code in isolation with tests to get it working without the noise of a bigger application before integrating it into your app.
          Erso have been requested to build a complex UI such as the experiment details page. We break the work up into small e2e pieces that allow us to get these thin slices in front of users faster.
          What it means for our stakeholders?
        </p>

        <p>
          Product: What product envision in their mind to be the solution may not be our first deliverable, as we try to deliver little and often with the desire to gain feedback. Engineering may also ask for customer feedback on product decisions soon after a deploy to better understand a delivery path.
        </p>

        <p>
          Services Engineering: Erso will ask for other engineering teams to engage with us on the premise of fast feedback, for example we will ask for the simplest integration first to get something deployed e2e asap.
        </p>

        <hr />
        <h2>3. Reduce friction for users</h2>
        <p>
          The third principle in our pyramid is that what we deliver, should in some way reduce some friction for the user. The deliverable may still be cumbersome, but any extra effort we ask our users to undertake must be relatively reduced in friction compared to an alternative.
        </p>

        <p>
          Examples:
          We may have been asked to add some business logic to a form, that complexity is already in the users mind and part of their everyday job. Refusal to add the business logic in this instance doesn't violate this principle, as the user journey doesn't add friction by not taking it away from the current workflow.
          The consumer of an Erso Platform tool would ideally like to import 1 dependency and never have to change it. That's a frictionless goal that we're aiming for however in order to achieve this we need to ensure we have a flexible API that can accept various configuration etc.
          What it means for our stakeholders?
        </p>

        <p>
          Product: We might make suggestions to product which in the engineers mind reduces the friction for users with minimal effort. Or we may provide feedback to solutions that focuses on reducing friction for users
        </p>

        <p>
          Services Engineering: If something can be achieved in just a few steps we may ask for API's to change etc
        </p>

        <hr />
        <h2>
          4. Readability first
        </h2>
        <p>
          One of the easiest to document as a technical principle. Erso favours code that is readable over most other coding principles. This means, when you are considering whether to write a reduce, or a couple maps and filters, an Erso should ask themselves, "what would a new engineer understand seeing this for the first time".
        </p>

        <p>
          The code should be self explanatory, it doesn't matter if it's overly verbose or pure as long as the intention of the code is clearly understood by reading the code itself.
        </p>

        <p>
          The code should be self explanatory, it doesn't matter if it's overly verbose or pure as long as the intention of the code is clearly understood by reading the code itself.
          Examples:
          Writing 4 ifs vs a nested ternary. The terse thing to do would be the ternary, but how readable is it? If in doubt, ask your pairing partner / someone else.
        </p>

        <hr />
        <h2>
          5. Every commit should be deployable
        </h2>

        <p>
          In case you didn't realise, we do trunk based development. That means that we all work on one branch and every change to that branch is deployed. This is to enable us to reach the fastest path to feedback (point 2). In order to have confidence in this approach it's important that every commit is deployable. Which usually means it needs to be small and tested.
        </p>

        <p>
          Examples:
          We have a large ticket in todo, it's to add a new set of actions to workbench in optumus. In order to keep the commit size small and deployable, we either need to flag off the functionality so that it's not revealed until it's ready. Or we need to ensure that each commit is ready. The latter is the preference.
          Another example of where this arises is with descoping during the development of a task, say an Erso has been working away on a ticket which has sprawled a little out of control. It's ok in this instance to commit code that is less than perfect perhaps even instantly redundant, just to keep the commit small and deployable.
          What it means for our stakeholders?
        </p>

        <p>
          Product: The slices we ship towards a feature could be significantly different to the intended outcome. For example, we were asked by product to add a new menu in the workbench header with dashboard rename functionality inside. Engineering in this instance preferred the idea of re-using the save modal but changing the title input from being read-only to editable. This would of been drastically different change but would of allowed engineering to build out the relevant GraphQL bits for rename without also having to build out the new menu and rename modal.
        </p>

        <p>
          Services Engineering: Firstly if anyone contributes to Erso code they should be aware that every commit should be, and likely will be shipped at least to our none-prod environments. Another affect is that if we are pushing for early integration with a service, we have significantly fewer steps to pushing to prod than many, however we also don't have a concept of deployable branches which means integration needs to happen in live.
        </p>

        <hr />
        <h2>
          6. Build loose structure on strong foundations
        </h2>
        <p>
          This is a lovely one, it is more architectural in focus but can scale. The idea here is that when you are building structures, they should be loosely defined. Almost allowing the definition to occur over time with use. There is a fine balance of retaining flexibility, whilst writing robust code that's also readable.
        </p>

        <p>
          Examples:
          Commit to patters which allow us to retain implementation flexibility, for example destructuring arguments in functions
          Build the foundations first with flexibility in mind, optumus workbench 2 is driven by the URL, that structure has been iterated on and solidified so forms our strong foundation. The UI hangs off that foundation and can be changed trivially without breaking users ability to view and navigate data
        </p>
        <p>
          What is our technical world view?
        </p>
        <ul>
          <li>Thin clients</li>
          <li>Composability</li>
          <li>Opinionated opt-out</li>
          <li>Strongly separated concerns</li>
        </ul>
      </Box>
    </>
  );
}
