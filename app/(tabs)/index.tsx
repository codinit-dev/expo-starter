import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const cardBackgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#1C1C1E' }, 'background');
  const secondaryBackgroundColor = useThemeColor({ light: '#F2F2F7', dark: '#2C2C2E' }, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor({}, 'icon');
  const statCardLight1 = useThemeColor({ light: '#E3F2FD', dark: '#1E3A5F' }, 'background');
  const statCardLight2 = useThemeColor({ light: '#F3E5F5', dark: '#4A148C' }, 'background');
  const statCardLight3 = useThemeColor({ light: '#E8F5E8', dark: '#1B5E20' }, 'background');

  const quickActions = [
    { id: '1', title: 'New Task', icon: 'plus.circle.fill', color: '#007AFF' },
    { id: '2', title: 'Calendar', icon: 'calendar', color: '#34C759' },
    { id: '3', title: 'Messages', icon: 'message.fill', color: '#FF9500' },
    { id: '4', title: 'Settings', icon: 'gear', color: '#8E8E93' },
  ];

  const recentActivities = [
    { id: '1', title: 'Completed project review', time: '2 hours ago', icon: 'checkmark.circle', color: '#34C759' },
    { id: '2', title: 'Team meeting scheduled', time: '4 hours ago', icon: 'person.2', color: '#007AFF' },
    { id: '3', title: 'New message from John', time: '6 hours ago', icon: 'message', color: '#FF9500' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor }]} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <ThemedView style={[styles.header, { backgroundColor: cardBackgroundColor }]}>
        <View style={styles.headerContent}>
          <View>
            <ThemedText type="title" style={styles.greeting}>Good morning!</ThemedText>
            <ThemedText style={[styles.subtitle, { color: textColor, opacity: 0.7 }]}>Ready to start your day?</ThemedText>
          </View>
          <View style={[styles.avatar, { backgroundColor: secondaryBackgroundColor }]}>
            <IconSymbol name="person.circle.fill" size={50} color={tintColor} />
          </View>
        </View>
      </ThemedView>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <ThemedView style={[styles.statCard, { backgroundColor: statCardLight1 }]}>
          <IconSymbol name="chevron.right" size={24} color="#1976D2" />
          <View style={styles.statContent}>
            <ThemedText type="title" style={styles.statNumber}>12</ThemedText>
            <ThemedText style={[styles.statLabel, { color: textColor, opacity: 0.7 }]}>Tasks Today</ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={[styles.statCard, { backgroundColor: statCardLight2 }]}>
          <IconSymbol name="clock" size={24} color="#7B1FA2" />
          <View style={styles.statContent}>
            <ThemedText type="title" style={styles.statNumber}>8h</ThemedText>
            <ThemedText style={[styles.statLabel, { color: textColor, opacity: 0.7 }]}>Time Tracked</ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={[styles.statCard, { backgroundColor: statCardLight3 }]}>
          <IconSymbol name="chevron.right" size={24} color="#388E3C" />
          <View style={styles.statContent}>
            <ThemedText type="title" style={styles.statNumber}>5</ThemedText>
            <ThemedText style={[styles.statLabel, { color: textColor, opacity: 0.7 }]}>Completed</ThemedText>
          </View>
        </ThemedView>
      </View>

      {/* Quick Actions */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Quick Actions</ThemedText>
        <View style={styles.quickActionsGrid}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action.id} style={[styles.quickActionButton, { backgroundColor: cardBackgroundColor }]}>
              <View style={[styles.quickActionIcon, { backgroundColor: `${action.color}20` }]}>
                <IconSymbol name={action.icon} size={24} color={action.color} />
              </View>
              <ThemedText style={styles.quickActionText}>{action.title}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>

      {/* Recent Activity */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Recent Activity</ThemedText>
        <View style={[styles.activityList, { backgroundColor: cardBackgroundColor }]}>
          {recentActivities.map((activity) => (
            <TouchableOpacity key={activity.id} style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: `${activity.color}20` }]}>
                <IconSymbol name="chevron.right" size={20} color={activity.color} />
              </View>
              <View style={styles.activityContent}>
                <ThemedText style={styles.activityTitle}>{activity.title}</ThemedText>
                <ThemedText style={[styles.activityTime, { color: textColor, opacity: 0.6 }]}>{activity.time}</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={16} color={iconColor} />
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>

      {/* Motivational Quote */}
      <ThemedView style={[styles.quoteCard, { backgroundColor: cardBackgroundColor }]}>
        <IconSymbol name="quote.opening" size={20} color={tintColor} />
        <ThemedText style={styles.quoteText}>
          &ldquo;The only way to do great work is to love what you do.&rdquo;
        </ThemedText>
        <ThemedText style={[styles.quoteAuthor, { color: textColor, opacity: 0.7 }]}>- Steve Jobs</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statContent: {
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '600',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    minWidth: '45%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  activityList: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  activityIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
  },
  quoteCard: {
    margin: 20,
    marginTop: 24,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 12,
    lineHeight: 24,
  },
  quoteAuthor: {
    fontSize: 14,
    textAlign: 'center',
  },
});
