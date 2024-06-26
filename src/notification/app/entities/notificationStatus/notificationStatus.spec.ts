import { notificationStatusFactory } from '@tests/factory/notificationStatusFactory';

describe('NotificationStatus test', () => {
	it('should be able to NotificationStatus class', () => {
		const sut = notificationStatusFactory();
		const sutWithRef = sut;
		const sutWithNoRef = sut.dereference();

		expect(sut.equalsTo(sutWithNoRef)).toBe(true);
		expect(sut.equalsTo(sutWithRef)).toBe(true);

		sutWithNoRef.accessed = true;
		expect(sut.equalsTo(sutWithNoRef)).toBe(false);

		sutWithRef.accessed = true;
		expect(sut.equalsTo(sutWithRef)).toBe(true);
	});
});
