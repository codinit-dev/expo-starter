import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useThemeColor } from '@/hooks/use-theme-color';

interface NotificationItem {
  id: string;
  type: string;
  title: string;
  message: string;
  time: string;
  icon: string;
  color: string;
  unread: boolean;
}

export default function NotificationsScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const cardBackgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#1C1C1E' }, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor({}, 'icon');

  const notifications = [
    {
      id: '1',
      type: 'task',
      title: 'Task Completed',
      message: 'You completed "Review project proposal"',
      time: '2 min ago',
      icon: 'checkmark.circle.fill',
      color: '#34C759',
      unread: true,
    },
    {
      id: '2',
      type: 'reminder',
      title: 'Meeting Reminder',
      message: 'Team standup in 15 minutes',
      time: '15 min ago',
      icon: 'clock.fill',
      color: '#FF9500',
      unread: true,
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message',
      message: 'Sarah sent you a message',
      time: '1 hour ago',
      icon: 'message.fill',
      color: '#007AFF',
      unread: false,
    },
    {
      id: '4',
      type: 'update',
      title: 'App Update',
      message: 'New features available in v1.1.0',
      time: '2 hours ago',
      icon: 'arrow.up.circle.fill',
      color: '#5856D6',
      unread: false,
    },
    {
      id: '5',
      type: 'achievement',
      title: 'Achievement Unlocked',
      message: 'Completed 10 tasks this week!',
      time: '1 day ago',
      icon: 'star.fill',
      color: '#FFCC00',
      unread: false,
    },
  ];

  const markAsRead = (id: string) => {
    // In a real app, this would update the notification status
    console.log('Mark as read:', id);
  };

  const renderNotification = (notification: NotificationItem) => (
    <TouchableOpacity
      key={notification.id}
      style={[styles.notificationItem, { backgroundColor: cardBackgroundColor }]}
      onPress={() => markAsRead(notification.id)}
    >
      <View style={[styles.notificationIcon, { backgroundColor: `${notification.color}20` }]}>
        <IconSymbol name="chevron.right" size={20} color={notification.color} />
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <ThemedText style={styles.notificationTitle}>{notification.title}</ThemedText>
          {notification.unread && <View style={[styles.unreadDot, { backgroundColor: tintColor }]} />}
        </View>
        <ThemedText style={[styles.notificationMessage, { color: textColor, opacity: 0.8 }]}>
          {notification.message}
        </ThemedText>
        <ThemedText style={[styles.notificationTime, { color: textColor, opacity: 0.6 }]}>
          {notification.time}
        </ThemedText>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <IconSymbol name="ellipsis" size={16} color={iconColor} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor }]} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <ThemedView style={[styles.header, { backgroundColor: cardBackgroundColor }]}>
        <ThemedText type="title" style={styles.headerTitle}>Notifications</ThemedText>
        <TouchableOpacity style={styles.markAllRead}>
          <ThemedText style={[styles.markAllReadText, { color: tintColor }]}>Mark all read</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Notifications List */}
      <View style={styles.notificationsList}>
        {notifications.map(renderNotification)}
      </View>

      {/* Empty State */}
      {notifications.length === 0 && (
        <ThemedView style={styles.emptyState}>
          <IconSymbol name="bell.slash.fill" size={64} color={iconColor} style={{ opacity: 0.5 }} />
          <ThemedText type="title" style={[styles.emptyTitle, { color: textColor, opacity: 0.7 }]}>
            No notifications
          </ThemedText>
          <ThemedText style={[styles.emptyMessage, { color: textColor, opacity: 0.5 }]}>
            You&apos;re all caught up!
          </ThemedText>
        </ThemedView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  markAllRead: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  markAllReadText: {
    fontSize: 14,
    fontWeight: '500',
  },
  notificationsList: {
    padding: 20,
    gap: 12,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  notificationMessage: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
  },
  moreButton: {
    padding: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
});