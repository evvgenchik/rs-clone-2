import '../styles/singleRecipe.scss';

class About {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="container">
      <div class="about">
            <h1>ABOUT CLONE FATSECRET</h1>
            <p>FatSecret is a new online diet, nutrition and weight loss community that harnesses the collective contributions of our members to generate practical and motivating information so that you can make better decisions to achieve your goals.</p>
            <p>The Secret is Out!</p>
            <p>FatSecret evolved from the idea that the most abundant and highly valuable source of information on nutrition and weight management is the sum of the views, performances, achievements and recommendations of individuals that make up the broader community. We've tried to create an easy to use system that gathers, stores and sorts the input of members of the FatSecret community to provide quality information and useful recommendations so that we can all benefit.</p>
            <p>We think there's a real need to help people overcome their diet and weight problems. We found it surprising that despite the enormous amount of information and products relating to diet and nutrition in the market place (most of it costing a lot of money) such a large proportion of the population is becoming overweight. </p>
            <ul>
              <li>Record your progress and track your performance </li>
              <li>Record the food you eat and exercise you do in your diet calendar</li>
              <li>Find ingredients and recipes that are right for your diet</li>
              <li>And so much more...</li>
            </ul>
            <p>Did we mention FatSecret is free. What you see is what you get. Our view is that the benefits of a vibrant diet community should be available for all. We are not like those other sites that promise free consultations, profiles, plans or advice, only to hook you in and then direct you to some paid product or 'premium' service. We thought it was important to make that clear. </p>
            <p>FatSecret is not a medical organization, and information and reports generated by us should not be interpreted as a substitute for medical advice or diagnosis. Some diets may not be suitable for some people and you are urged to seek the advice of a physician before beginning any weight loss effort or regimen.</p>
            <p>We hope you make FatSecret a part of your day everyday. </p>
      </div>
    </div>
    <div class="developers">
          <h1>DEVELOPERS</h1>
          <div class="developers__block">
            <div class="developers__card">
              <img src="../src/img/evgeniy-photo.svg" alt="">
              <h2>Evgeniy Onishchenko</h2>
              <h3>Team Lead, Frontend developer</h3>
              <p>description of the work done in the project</p>
            </div>
            <div class="developers__card">
              <img src="../src/img/svitlana-photo.svg" alt="">
              <h2>Svitlana Ponlratenko</h2>
              <h3>Frontend developer</h3>
              <p>description of the work done in the project</p>
            </div>
            <div class="developers__card">
              <img src="../src/img/uladzislau-photo.svg" alt="">
              <h2>Uladzislau Loikuts</h2>
              <h3>Frontend developer</h3>
              <p>description of the work done in the project</p>
            </div>
          </div>
        </div>
        
    `;
  }
}

export { About };
