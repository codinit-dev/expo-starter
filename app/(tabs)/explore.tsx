import { ScrollView, StyleSheet, TouchableOpacity, Switch, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useThemeColor } from '@/hooks/use-theme-color';

interface ProfileItem {
  id: string;
  title: string;
  icon: string;
  action: string;
  value?: boolean;
  subtitle?: string;
}

export default function ProfileScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const cardBackgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#1C1C1E' }, 'background');
  const secondaryBackgroundColor = useThemeColor({ light: '#F2F2F7', dark: '#2C2C2E' }, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor({}, 'icon');

  const profileSections = [
    {
      title: 'Account',
      items: [
        { id: '1', title: 'Personal Information', icon: 'person.fill', action: 'chevron.right' },
        { id: '2', title: 'Security Settings', icon: 'lock.fill', action: 'chevron.right' },
        { id: '3', title: 'Privacy', icon: 'hand.raised.fill', action: 'chevron.right' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { id: '4', title: 'Notifications', icon: 'bell.fill', action: 'toggle', value: true },
        { id: '5', title: 'Dark Mode', icon: 'moon.fill', action: 'toggle', value: false },
        { id: '6', title: 'Language', icon: 'globe', action: 'chevron.right', subtitle: 'English' },
      ],
    },
    {
      title: 'Support',
      items: [
        { id: '7', title: 'Help Center', icon: 'questionmark.circle.fill', action: 'chevron.right' },
        { id: '8', title: 'Contact Us', icon: 'message.fill', action: 'chevron.right' },
        { id: '9', title: 'About', icon: 'info.circle.fill', action: 'chevron.right' },
      ],
    },
  ];

  const renderProfileItem = (item: ProfileItem, iconColor: string, textColor: string, secondaryBackgroundColor: string) => (
    <TouchableOpacity key={item.id} style={styles.profileItem}>
      <View style={styles.itemLeft}>
        <View style={[styles.itemIcon, { backgroundColor: secondaryBackgroundColor }]}>
          <IconSymbol name="chevron.right" size={20} color={tintColor} />
        </View>
        <View style={styles.itemContent}>
          <ThemedText style={styles.itemTitle}>{item.title}</ThemedText>
          {item.subtitle && (
            <ThemedText style={[styles.itemSubtitle, { color: textColor, opacity: 0.6 }]}>{item.subtitle}</ThemedText>
          )}
        </View>
      </View>
      {item.action === 'toggle' ? (
        <Switch value={item.value} onValueChange={() => {}} />
      ) : (
        <IconSymbol name={item.action} size={16} color={iconColor} />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor }]} showsVerticalScrollIndicator={false}>
      {/* Profile Header */}
      <ThemedView style={[styles.header, { backgroundColor: cardBackgroundColor }]}>
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <IconSymbol name="person.circle.fill" size={80} color={tintColor} />
            <TouchableOpacity style={[styles.editButton, { backgroundColor: tintColor }]}>
              <IconSymbol name="pencil.circle.fill" size={24} color={cardBackgroundColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfo}>
            <ThemedText type="title" style={styles.userName}>John Doe</ThemedText>
            <ThemedText style={[styles.userEmail, { color: textColor, opacity: 0.7 }]}>john.doe@example.com</ThemedText>
            <ThemedText style={[styles.userStatus, { color: tintColor }]}>Premium Member</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Profile Sections */}
      {profileSections.map((section) => (
        <ThemedView key={section.title} style={styles.section}>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: textColor, opacity: 0.7 }]}>
            {section.title}
          </ThemedText>
          <View style={[styles.sectionContent, { backgroundColor: cardBackgroundColor }]}>
            {section.items.map((item) => renderProfileItem(item, iconColor, textColor, secondaryBackgroundColor))}
          </View>
        </ThemedView>
      ))}

      {/* Sign Out Button */}
      <TouchableOpacity style={[styles.signOutButton, { backgroundColor: cardBackgroundColor }]}>
        <IconSymbol name="arrow.right.square" size={20} color="#FF3B30" />
        <ThemedText style={styles.signOutText}>Sign Out</ThemedText>
      </TouchableOpacity>

      {/* App Version */}
      <View style={styles.versionContainer}>
        <ThemedText style={styles.versionText}>Version 1.0.0</ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileInfo: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    marginBottom: 4,
  },
  userStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  sectionContent: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginBottom: 10,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  signOutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF3B30',
    marginLeft: 8,
  },
  versionContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  versionText: {
    fontSize: 14,
    opacity: 0.5,
  },
});
