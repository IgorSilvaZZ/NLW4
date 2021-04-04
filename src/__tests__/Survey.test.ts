import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';

import createConnection from '../database';

describe("Surveys", () => {

    /* Antes de todos os testes */
    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    /* Depois de todos os testes */
    afterAll(async() => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    })

    it("Should be able to create a new survey", async() => {
        const response = await request(app).post("/surveys")
        .send({
            title: "Title Example",
            description: "Description Example"
        })

        expect(response.status).toBe(201);
    })

    it("Should be able to get all surveys", async() => {
        await request(app).post("/surveys")
        .send({
            title: "Title Example2",
            description: "Description Example2"
        });

        const response = await request(app).get("/surveys")

        expect(response.body.length).toBe(2);
    })
})