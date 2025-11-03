import { UserProfile } from "@/types/profile";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PROFILE_STORAGE_KEY = 'user_profile';

export class ProfileStorage {
    
    static async load(): Promise<UserProfile | null> {
        const profileJson = await AsyncStorage.getItem(PROFILE_STORAGE_KEY);

        if (! profileJson) {
            return null;
        }

        const profile: UserProfile = JSON.parse(profileJson);
        return profile;
    }

    static async save(profile: UserProfile): Promise<void> {
        const profileJson = JSON.stringify(profile);
        await AsyncStorage.setItem(PROFILE_STORAGE_KEY, profileJson);
    }
}