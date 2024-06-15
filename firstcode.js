/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this ne?
2. Create an object inside yoir mintNFT function that will hold the metadata for your NFTs.
   The metadata values will be passed to the function as parametees. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function woll print all of your NFTs metadata
   to the console (i.e. console.log("Name:" + someNFT.name))
4. For good measure, getTotalSupply()nshould return the number of NFT's ytouy have created
*/

// create a varaible to hold your NFT's

const NFTs = []

/* this function will take in some values as parameters, create an 
 NFT object using the parameters passed to it for its metadata,
 and store it in the variable above.
*/

function mintNFT(name, age, cgpa, town){
    const NFT = {
        "name": name,
        "age": age,
        "cgpa": cgpa,
        "town": town
    }
    NFTs.push(NFT);
    console.log("Minted:" + name);
}

/* crete a "loop" that will go through an "array" of NFT's 
 and print their metadata with console.lpg()
*/

function listNFTs () {
 for(let i=0; i < NFTs.length;i++){
    console.log("\nID: \t\t" + (i+1));
    console.log("name: \t\t" + NFTs[i].name);
    console.log("age: \t" + NFTs[i].age);
    console.log("cgpa: " + NFTs[i].cgpa);
    console.log("town: \t\t" + NFTs[i].town);
 }
}

// print the total number of NFTs we have minted to the console

function getTotalSupply(){
    console.log("\n" + NFTs.length);
}

// call your functions below this line 

mintNFT("Shivam"  , 20, 8.3, "Patna");
mintNFT("Abhishek", 20, 8.6, "Jamui");
mintNFT("Farhan"  , 22, 8.5, "Hapur");
mintNFT("Abhinesh", 21, 9.1, "Gaya");
listNFTs();
getTotalSupply();