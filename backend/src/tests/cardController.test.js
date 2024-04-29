const cardModel = require("../models/cardModel");
const {
  findAllUsersCards,
  createCard,
  editCard,
} = require("../controllers/cardController");
const httpMocks = require("node-mocks-http");

// FindAllUsersCards
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

// CreateCard
describe("createCard", () => {
  it("should post a new card", async () => {
    const userId = "123";
    const req = httpMocks.createRequest({
      body: {
        name: "Charizard EX",
        set: "Scarlet & Violet 151",
        cardNumber: "199",
        quantity: 2,
        marketValue: "114.99",
      },
      user: { _id: userId },
    });

    const res = httpMocks.createResponse();
    const mockCard = { ...req.body, user_id: req.user._id };

    cardModel.create = jest.fn().mockResolvedValue(mockCard);

    await createCard(req, res);

    expect(res.statusCode).toBe(201);
    expect(res._getJSONData()).toEqual(mockCard);
  });
});

// editCard
describe("editCard", () => {
  it("should edit an existing card", async () => {
    const cardId = "3435dkkhkjhfc";
    const updatedCard = {
      _id: cardId,
      quantity: 1,
      marketValue: "$120.00",
    };

    const req = httpMocks.createRequest({
      params: { id: cardId },
      body: updatedCard,
    });

    const res = httpMocks.createResponse();

    cardModel.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedCard);

    await editCard(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(updatedCard);
  });

  it("should handle card not found", async () => {
    const cardId = "355ttkjgd97u5";

    const req = httpMocks.createRequest({
      params: { id: cardId },
      body: {
        quantity: 1,
        marketValue: "$120.00",
      },
    });
    const res = httpMocks.createResponse();

    cardModel.findByIdAndUpdate = jest.fn().mockResolvedValue(null);

    await editCard(req, res);

    expect(res.statusCode).toBe(404);
    expect(res._getJSONData()).toEqual({ error: "Card not found" });
  });
});
