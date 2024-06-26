import {
	NotificationStatus,
	TNotificationStatusInput,
} from '@app/entities/notificationStatus';
import { randomUUID } from 'crypto';

type TOverride = Partial<TNotificationStatusInput>;

export function notificationStatusFactory(input: TOverride = {}) {
	return new NotificationStatus({
		notificationId: randomUUID(),
		subscriberId: randomUUID(),
		accessed: false,
		...input,
	});
}
