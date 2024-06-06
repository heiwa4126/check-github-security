const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
	it("should return the user comment", async () => {
		const response = await request(app).get("/?comment=Hello");
		expect(response.status).toBe(200);
		expect(response.text).toContain("User comment: Hello");
	});

	it("should handle empty user comment", async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
		expect(response.text).toContain("User comment: ");
	});
});
