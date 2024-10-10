import Logo from '@/app/ui/logo';
import Footer from '@/app/ui/footer';

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center pb-14">
        <div>
          <Logo />
        </div>
        <div>
          <p className="text-14 relative top-1">...and everything in between</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
