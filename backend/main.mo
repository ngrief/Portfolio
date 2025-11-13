import OrderedMap "mo:base/OrderedMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

actor Portfolio {
  transient let textMap = OrderedMap.Make<Text>(Text.compare);

  var socialLinks = textMap.fromIter<Text>(
    Iter.fromArray([
      ("github", "https://github.com/ntrief"),
      ("linkedin", "https://www.linkedin.com/in/ntrief/"),
      ("twitter", "https://twitter.com/ntrief"),
      ("email", "mailto:ntrief@gmail.com"),
    ])
  );

  var projects = textMap.fromIter<Text>(
    Iter.fromArray([
      (
        "project1",
        "{
          'title': 'Personal Portfolio Website',
          'description': 'A modern, responsive portfolio website built with React and Tailwind CSS.',
          'technologies': ['React', 'Tailwind CSS', 'JavaScript'],
          'github': 'https://github.com/ntrief/portfolio',
          'demo': 'https://ntrief.com',
          'image': '/images/portfolio.png'
        }"
      ),
      (
        "project2",
        "{
          'title': 'E-commerce Platform',
          'description': 'Full-stack e-commerce platform with shopping cart and payment integration.',
          'technologies': ['Node.js', 'Express', 'MongoDB', 'React'],
          'github': 'https://github.com/ntrief/ecommerce',
          'demo': '',
          'image': '/images/ecommerce.png'
        }"
      ),
    ])
  );

  public query func getSocialLinks() : async [(Text, Text)] {
    Iter.toArray(textMap.entries(socialLinks));
  };

  public query func getProjects() : async [(Text, Text)] {
    Iter.toArray(textMap.entries(projects));
  };

  public query func getProjectById(id : Text) : async ?Text {
    textMap.get(projects, id);
  };
};
