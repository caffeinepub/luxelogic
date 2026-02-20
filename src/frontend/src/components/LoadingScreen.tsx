interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) {
    return (
      <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center loading-fade-out pointer-events-none">
        <div className="text-center">
          <h1 className="font-heading text-8xl md:text-9xl font-semibold text-primary monogram-animate">
            LL
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-8xl md:text-9xl font-semibold text-primary monogram-animate">
          LL
        </h1>
      </div>
    </div>
  );
}
