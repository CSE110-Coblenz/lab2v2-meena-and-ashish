import {describe, it, expect} from "vitest"
import { snacksB } from "./snacks";

describe("snacks", ()=>{
	console.log(snacksB);
	it("should have at least 3 items", ()=>{
		expect(snacksB.length).toBeGreaterThanOrEqual(3);
	});

	it("should include chips", ()=>{
		expect(snacksB).toContain("chips");
	});

});
