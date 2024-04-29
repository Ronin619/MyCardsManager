const cardModel = require("../models/cardModel");
const { findAllUsersCards } = require("../controllers/cardController");
const httpMocks = require("node-mocks-http");

describe("findAllUsersCards", () => {
  it("should return all cards for the user", async () => {
    const userId = "123";
    const cards = [
      {
        _id: "65dfff8b125ebb584fa78501",
        user_id: userId,
        set: "Scarlet & Violet 151",
        name: "IvySaur",
        cardNumber: 2,
        quanitty: 10,
        marketValue: "$3.99",
      },
      {
        _id: "65e004180add1b0491f9ffe7",
        user_id: userId,
        set: "Scarlet & Violet 151",
        name: "Charmeleon",
        cardNumber: 5,
        quanitty: 5,
        marketValue: "$19.99",
      },
      {
        _id: "65e004250add1b0491f9ffea",
        user_id: userId,
        set: "Scarlet & Violet 151",
        name: "Blastoise",
        cardNumber: 3,
        quanitty: 5,
        marketValue: "$1.99",
      },
    ];
    cardModel.find = jest.fn().mockResolvedValue(cards);

    const req = httpMocks.createRequest({ user: { _id: userId } });
    const res = httpMocks.createResponse();

    await findAllUsersCards(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(cards);
  });
});
