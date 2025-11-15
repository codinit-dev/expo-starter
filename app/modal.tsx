import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function ModalScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const cardBackgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#1C1C1E' }, 'background');
  const tintColor = useThemeColor({}, 'tint');

  return (
    <ThemedView style={[styles.container, { backgroundColor: `${backgroundColor}CC` }]}>
      <ThemedView style={[styles.modalContent, { backgroundColor: cardBackgroundColor }]}>
        <ThemedText type="title" style={styles.title}>Welcome to the Modal</ThemedText>
        <ThemedText style={styles.description}>
          This is a beautiful modal screen that demonstrates the app&apos;s theming capabilities.
          It automatically adapts to light and dark modes.
        </ThemedText>

        <ThemedView style={styles.featuresList}>
          <ThemedView style={styles.featureItem}>
            <ThemedText style={[styles.featureIcon, { color: tintColor }]}>✨</ThemedText>
            <ThemedText style={styles.featureText}>Dynamic theming support</ThemedText>
          </ThemedView>
          <ThemedView style={styles.featureItem}>
            <ThemedText style={[styles.featureIcon, { color: tintColor }]}>📱</ThemedText>
            <ThemedText style={styles.featureText}>Mobile-first design</ThemedText>
          </ThemedView>
          <ThemedView style={styles.featureItem}>
            <ThemedText style={[styles.featureIcon, { color: tintColor }]}>🎨</ThemedText>
            <ThemedText style={styles.featureText}>Beautiful UI components</ThemedText>
          </ThemedView>
        </ThemedView>

        <Link href="/" dismissTo style={[styles.link, { backgroundColor: tintColor }]}>
          <ThemedText style={[styles.linkText, { color: cardBackgroundColor }]}>Close Modal</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    borderRadius: 20,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 22,
    marginBottom: 24,
  },
  featuresList: {
    marginBottom: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 16,
    flex: 1,
  },
  link: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
