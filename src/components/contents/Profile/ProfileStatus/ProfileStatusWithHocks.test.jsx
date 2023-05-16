import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";

describe("Profile Status Component", () => {
	test("status from props should be in the state", () => {
		const component = create(<ProfileStatus status="status" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("status");
	});
	test("span should be install just one", () => {
		const component = create(<ProfileStatus status="status" />);
		const root = component.root;
		const span = root.findAllByType("span")
		expect(span.length).toBe(1);
	});
	test("span should be have text like in props status", () => {
		const component = create(<ProfileStatus status="status" />);
		const root = component.root;
		const span = root.findByType("span")
		expect(span.children[0]).toBe("status");
	});
	test("input shouldn't be find", () => {
		const component = create(<ProfileStatus status="status" />);
		const root = component.root;
		const input = root.findAllByType("input")
		expect(input.length).toBe(0);
	});
	test("callback should be called", () => {
		const mockCallback = jest.fn();
		const component = create(<ProfileStatus status="status" putStatusProfileTC={mockCallback} />);
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});