using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence {
  public class Seed {
    public static async Task SeedData (DataContext context) {
      if (context.Activities.Any ()) return;

      var activities = new List<Activity> {
        new Activity {
        Title = "Past Activity 1",
        Date = DateTime.Now.AddMonths (-2),
        Description = "Activity 2 months ago",
        Category = "drinks",
        City = "London",
        Venue = "Pub",

        },
        new Activity {
        Title = "Past Activity 2",
        Date = DateTime.Now.AddMonths (-1),
        Description = "Activity 1 month ago",
        Category = "culture",
        City = "Paris",
        Venue = "The Louvre",

        },
        new Activity {
        Title = "Future Activity 1",
        Date = DateTime.Now.AddMonths (1),
        Description = "Activity 1 month in future",
        Category = "music",
        City = "London",
        Venue = "Wembly Stadium",

        },
        new Activity {
        Title = "Future Activity 2",
        Date = DateTime.Now.AddMonths (2),
        Description = "Activity 2 months in future",
        Category = "food",
        City = "London",
        Venue = "Jamies Italian",

        },
        new Activity {
        Title = "Future Activity 3",
        Date = DateTime.Now.AddMonths (3),
        Description = "Activity 3 months in future",
        Category = "drinks",
        City = "London",
        Venue = "Pub",
        },
        new Activity {
        Title = "Future Activity 4",
        Date = DateTime.Now.AddMonths (4),
        Description = "Activity 4 months in future",
        Category = "culture",
        City = "London",
        Venue = "British Museum",

        },
        new Activity {
        Title = "Future Activity 5",
        Date = DateTime.Now.AddMonths (5),
        Description = "Activity 5 months in future",
        Category = "drinks",
        City = "London",
        Venue = "Punch and Judy",

        },
        new Activity {
        Title = "Future Activity 6",
        Date = DateTime.Now.AddMonths (6),
        Description = "Activity 6 months in future",
        Category = "music",
        City = "London",
        Venue = "O2 Arena",

        },
        new Activity {
        Title = "Future Activity 7",
        Date = DateTime.Now.AddMonths (7),
        Description = "Activity 7 months in future",
        Category = "travel",
        City = "Berlin",
        Venue = "All",

        },
        new Activity {
        Title = "Future Activity 8",
        Date = DateTime.Now.AddMonths (8),
        Description = "Activity 8 months in future",
        Category = "drinks",
        City = "London",
        Venue = "Pub",

        }
      };

      // if (context.Products.Any ()) return;

      // var products = new List<Product> {
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,
      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   },
      //   new Product {
      //   name = "The Pop Shoppe - Root Beer",
      //   image = "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
      //   description = "Replacement of R Axilla Vein with Synth Sub, Open Approach",
      //   brand = "Arnica Betula A",
      //   category = "RUB",
      //   price = "806.65",
      //   sale = false,
      //   priceCompare = "937.91",
      //   countInStock = 1,
      //   rating = 2,
      //   numReviews = 494,

      //   }
      // };

      await context.Activities.AddRangeAsync (activities);
      // await context.Products.AddRangeAsync (products);
      await context.SaveChangesAsync ();
    }
  }
}