var module = angular.module("myApp", []);


$('.submit').click(function(){
    console.log('email working');
    var form_data = $('#contactForm').serialize() + '&destination=' + 'gene.ryman@gmail.com';
    console.log(form_data);
    if ($('#name').val() === '' | $('#email').val() === '' | $('#message').val() === ''){
      window.alert('Must complete all required fields!');
    } else {
      $.ajax({
          type: "POST", 
          url: "emailform.php",
          dataType: "json", // Add datatype
          data: form_data
        }).done(function (data) {
            console.log(data);
            alert("Message sent!");
        }).fail(function (data) {
            alert("Message failed to send");
            console.log(data);
        });
      }
    }); 

module.controller('MainController', ['$scope', function($scope) {
  $scope.getProject = function(){
    console.log(this.page.name);
    $scope.projectName = this.page.name;
    $scope.projectImage = this.page.screenshot;
    $scope.projectDesc = this.page.description;
    $scope.menuLink = this.page.menuLink;
    $scope.sampleLink = this.page.sampleLink;
  }
	$scope.name = 'MRO Developers';
  $scope.header = {
    title: 'MRO Developers',
    tagline: 'Professional Web Development for as low as $5!',
    cover: 'images/cover.jpg'
  },
  $scope.main = {
    description: ["MRO Developers creates high quality, affordable web/mobile pages for your personal business, actor/model personality, or band/musical act which can be edited directly through your Facebook account.", "We offer youtube-related services as well - add a video section to your page and edit it directly from your Youtube account.", "Soon, we will be offering similar services for Shopify, IMDb, and more!", "Free web-hosting for a limited time only!"],
    mission: ["Developing a website for yourself or your business can be daunting. Not only is it expensive, but relying on someone you don't know to update and maintain your page can sometimes seem more trouble than it's worth.", "At MRO Developers, we give your a website, and you're in control. Being able to update your page directly through your Facebook page, you can cut out the middle man and control the content of your page at your convenience. All for a fraction of the cost.", "Contact us today and get your own personal webpage starting at only $5."],
    logo: 'images/logo.png',
  },
  $scope.contact = {
    email: 'gene.ryman@gmail.com'
  },
  $scope.services = [
    {
      name: 'Responsive Design',
      icon: 'fa-mobile',
      description: 'Professional, fully responsive design that maintains quality accross all screen sizes and platforms.'
    },{
      name: 'Independent Content Control',
      icon: 'fa-laptop',
      description: 'Edit your webpage directly through your Facebook page! No need to rely on a developer!'
    },{
      name: 'Customizable Design',
      icon: 'fa-pencil',
      description: 'We\'ll work closely with you to to create your perfect webpage!'
    },
  ],
  $scope.pages = [
    {
      name: 'Band/Musician Page',
      description: ["I will create a professional, affordable, mobile responsive website using your Facebook band/musician page.", "You'll be able to edit the content of the website yourself very easily, directly through your Facebook page.", "If you have a Bandcamp page, I can include that too.", "Check the pricing menu for additional options, such as custom design and YouTube accessibility.", "In the coming weeks, I'll be adding merchandise sales through Shopify, so check back often!"],
      screenshot: 'img/bandfullsize.png',
      sampleLink: 'http://www.mropresents.com/page/band/index.html',
      menuLink: 'https://www.fiverr.com/mrodevelopers/create-a-webpage-for-your-band'
    },{
      name: 'Actor/Model Page',
      description: ["I will create a professional, affordable, mobile responsive website using your Facebook actor/model page.", "You'll be able to edit the content of the website yourself very easily, directly through your Facebook page.", "Check the pricing menu for additional options, such as custom design and YouTube accessibility.", "In the coming weeks, I'll be adding merchandise sales through Shopify, so check back often!"],
      screenshot: 'img/bandfullsize.png',
      sampleLink: 'http://www.mropresents.com/person_page_standard/index.php',
      menuLink: 'https://www.fiverr.com/mrodevelopers/create-a-webpage-for-your-actor-or-model-page'
    },{
      name: 'Business Page',
      description: ["I will create a professional, affordable, mobile responsive website using your Facebook business page.", "You'll be able to edit the content of the website yourself very easily, directly through your Facebook page.", "Check the pricing menu for additional options, such as custom design and YouTube accessibility.", "In the coming weeks, I'll be adding merchandise sales through Shopify, so check back often!"],
      screenshot: 'img/businessfullsize.png',
      sampleLink: 'http://www.mropresents.com/page/business/index.html',
      menuLink: 'https://www.fiverr.com/mrodevelopers/create-a-webpage-for-your-small-business'
    }
  ]
}])
