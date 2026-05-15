import { CLUBS, LEAGUES, MY_SQUADS } from '../assets/mockData';
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ClubCard from '../components/ClubCard';
import QuickStat from '../components/QuickStat';
import { SafeAreaView } from 'react-native-safe-area-context';
import SquadRow from '../components/SquadRow';
import { colors } from '../assets/color';
import { fontSize } from '../assets/fontSize';

const HomeScreen = ({ navigation }) => {
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [selectedClub, setSelectedClub] = useState(null);

  const filteredClubs =
    selectedLeague === 'all'
      ? CLUBS
      : CLUBS.filter(c => c.league === selectedLeague);

  const handleSelectClub = club => {
    setSelectedClub(prev => (prev?.id === club.id ? null : club));
  };

  const handleViewPitch = () => {
    if (!selectedClub) return;
    navigation?.navigate('Pitch', { club: selectedClub });
  };

  return (
    <SafeAreaView style={s.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryBackground}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.scroll}
      >
        {/* ── Header ── */}
        <View style={s.header}>
          <View>
            <Text style={s.greeting}>Welcome back 👋</Text>
            <Text style={s.screenTitle}>Squad Builder</Text>
          </View>
          <TouchableOpacity style={s.avatar}>
            <Text style={s.avatarText}>FC</Text>
          </TouchableOpacity>
        </View>

        {/* ── Quick stats ── */}
        <View style={s.statsRow}>
          <QuickStat
            label="SQUADS"
            value={MY_SQUADS.length}
            accentColor={colors.primary}
          />
          <QuickStat label="BEST OVR" value="91" accentColor={colors.warning} />
          <QuickStat
            label="BEST CHEM"
            value="96"
            accentColor={colors.chemistryStrong}
          />
        </View>

        {/* ── My Squads ── */}
        <View style={s.section}>
          <View style={s.sectionHeader}>
            <Text style={s.sectionTitle}>My Squads</Text>
            <TouchableOpacity>
              <Text style={s.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          {MY_SQUADS.map(squad => (
            <SquadRow
              key={squad.id}
              squad={squad}
              onPress={() =>
                navigation?.navigate('Pitch', { squadId: squad.id })
              }
            />
          ))}
        </View>

        {/* ── Club selector ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Select a Club</Text>

          {/* League filter pills */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.leaguePills}
            style={s.leagueScroll}
          >
            {LEAGUES.map(league => (
              <TouchableOpacity
                key={league.id}
                style={[s.pill, selectedLeague === league.id && s.pillActive]}
                onPress={() => setSelectedLeague(league.id)}
              >
                <Text
                  style={[
                    s.pillText,
                    selectedLeague === league.id && s.pillTextActive,
                  ]}
                >
                  {league.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Club grid */}
          <View style={s.grid}>
            {filteredClubs.map(club => (
              <ClubCard
                key={club.id}
                club={club}
                isSelected={selectedClub?.id === club.id}
                onPress={handleSelectClub}
              />
            ))}
          </View>
        </View>

        {/* ── CTA ── */}
        <TouchableOpacity
          style={[s.cta, !selectedClub && s.ctaDisabled]}
          onPress={handleViewPitch}
          disabled={!selectedClub}
          activeOpacity={0.85}
        >
          <Text style={[s.ctaText, !selectedClub && s.ctaTextDisabled]}>
            {selectedClub
              ? `View ${selectedClub.name} on Pitch  →`
              : 'Select a Club to Continue'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

// ─── Styles ──────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 36,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: fontSize.small,
    color: colors.mutedText,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  screenTitle: {
    fontSize: fontSize.heading,
    fontWeight: '800',
    color: colors.primaryText,
    letterSpacing: -0.5,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.primary + '22',
    borderWidth: 1.5,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: fontSize.small,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 1,
  },

  // Quick stats
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },

  // Sections
  section: { marginBottom: 24 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: fontSize.largeMedium,
    fontWeight: '700',
    color: colors.primaryText,
    letterSpacing: -0.2,
    marginBottom: 10,
  },
  seeAll: {
    fontSize: fontSize.small,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 10,
  },

  // League pills
  leagueScroll: { marginBottom: 14 },
  leaguePills: { gap: 8, paddingRight: 8 },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillActive: {
    backgroundColor: colors.primary + '22',
    borderColor: colors.primary,
  },
  pillText: {
    fontSize: fontSize.small,
    color: colors.secondaryText,
    fontWeight: '600',
  },
  pillTextActive: { color: colors.primary },

  // Club grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },

  // CTA
  cta: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  ctaDisabled: {
    backgroundColor: colors.cardBackground,
    shadowOpacity: 0,
    elevation: 0,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ctaText: {
    fontSize: fontSize.medium,
    fontWeight: '800',
    color: colors.primaryText,
    letterSpacing: 0.3,
  },
  ctaTextDisabled: {
    color: colors.mutedText,
  },
});
