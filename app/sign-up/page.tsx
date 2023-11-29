import Auth from "@/components/auth";

export default function SignUp() {
  return (
    <main className="flex justify-between h-screen">
      <div
        id="background-login-image"
        className="w-1/2"
        style={{
          backgroundImage: `url("/xxtinction_a_shades_of_blue_3d_abstract_with_sharp_corners_glas_1a407c5d-2d8a-4147-bd2e-1179a32fa523.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div id="authentication-sign-up" className="w-1/2 self-center">
        <Auth />
      </div>
    </main>
  );
}