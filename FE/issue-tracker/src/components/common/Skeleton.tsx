import { Skeleton, SkeletonCircle } from '@chakra-ui/skeleton';

// 프로필 이미지 스켈레톤
export const ProfileSkeleton = <SkeletonCircle size="10" isLoaded={false} />;

// 라벨 스켈레톤
export const LabelSkeleton = <Skeleton height="20px" borderRadius="16px" />;
