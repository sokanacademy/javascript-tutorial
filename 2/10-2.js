const myRoom = {
  size: 12,
  closets: {
    firstCloset: {
      color: "red",
      shelves: 3,
    },
    secondCloset: {
      color: "orange",
      shelves: 5,
    },
  },
  numOfShelves: function () {
    /**
     * This method calculates and returns number of all shelves of closets
     * @return {number} number of all shelves of closets
     */
    let firstClosetShelves = this.closets.firstCloset.shelves;
    let secondClosetShelves = this.closets.secondCloset.shelves;

    return firstClosetShelves + secondClosetShelves;
  },
};

console.log(myRoom.numOfShelves());
