import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type Category = {
    #luxury;
    #vintage;
    #dupe;
  };

  type Product = {
    name : Text;
    description : Text;
    category : Category;
    price : Nat;
    imageRef : Text;
  };

  let products = Map.empty<Text, Product>();

  public shared ({ caller }) func addProduct(name : Text, description : Text, category : Category, price : Nat, imageRef : Text) : async () {
    if (products.containsKey(name)) { Runtime.trap("Product already exists") };
    let product : Product = {
      name;
      description;
      category;
      price;
      imageRef;
    };
    products.add(name, product);
  };

  public query ({ caller }) func getProduct(name : Text) : async Product {
    switch (products.get(name)) {
      case (?product) { product };
      case (null) { Runtime.trap("Product not found") };
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    products.values().toArray().filter(
      func(product) {
        product.category == category;
      }
    );
  };
};
