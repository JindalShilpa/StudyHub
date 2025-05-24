import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useSignUpUserMutation,
  useLoginUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    signupUser,
    {
      data: signUpData,
      error: signUpError,
      isLoading: signUpIsLoading,
      isSuccess: signUpIsSuccess,
    },
  ] = useSignUpUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const [lastAction, setLastAction] = useState(null);

  const navigate = useNavigate();

  const changeInfoHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInfo((prev) => ({ ...prev, [name]: value }));
    } else {
      setLoginInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAuth = async (type) => {
    setLastAction(type);
    if (type === "signup") {
      await signupUser(signupInfo);
    } else {
      await loginUser(loginInfo);
    }
  };

  useEffect(() => {
    if (lastAction === "signup") {
      if (signUpIsSuccess && signUpData) {
        toast.success(signUpData.message || "User SignUp successfully");
        setSignupInfo({ name: "", email: "", password: "" });
      } else if (signUpError) {
        toast.error(signUpError?.data?.message || "User SignUp failed");
      }
    } else if (lastAction === "login") {
      if (loginIsSuccess && loginData) {
        toast.success(loginData.message || "User Login successfully");
        navigate("/");
        setLoginInfo({
          email: "",
          password: "",
        });
      } else if (loginError) {
        toast.error(loginError?.data?.message || "User Login failed");
      }
    }
  }, [
    loginIsLoading,
    signUpIsLoading,
    loginData,
    signUpData,
    loginError,
    signUpError,
    loginIsSuccess,
    signUpIsSuccess,
  ]);

  return (
    <div className="flex h-screen items-center justify-center">
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">SignUp</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Don't have an account? Sign up here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  onChange={(e) => changeInfoHandler(e, "signup")}
                  id="name"
                  name="name"
                  value={signupInfo.name}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={signupInfo.email}
                  onChange={(e) => changeInfoHandler(e, "signup")}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={signupInfo.password}
                  onChange={(e) => changeInfoHandler(e, "signup")}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={signUpIsLoading}
                onClick={() => handleAuth("signup")}
              >
                {signUpIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    Wait
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Already have an account? Login here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={loginInfo.email}
                  onChange={(e) => changeInfoHandler(e, "login")}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={loginInfo.password}
                  onChange={(e) => changeInfoHandler(e, "login")}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginIsLoading}
                onClick={() => handleAuth("login")}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    Wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
