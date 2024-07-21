export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileReducer,
    profileActions,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProvileData/fetchProvileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';
