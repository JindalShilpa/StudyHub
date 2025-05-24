import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Badge } from "@/components/ui/badge";

function Course() {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABI1BMVEUQFjD///+u6TkAAAD+8OUAAC+08TkEBjAOEzBJYzEQFy//9uo7EOX/+O0AACYAACPc3NwJDDDs7Ow3SjENFiIuErEMFh0OFiYjFIQnE5MACSk8EOtdWmKak5UMFhgzEcQUFUTIyMj29vYAAB+jm5uazjcyNEYAABX26N+JgoUAACAAABoKDh5rkDMICxiQwTZkhTRDWjFUUl1EQ1EGCBKjo6Nubm67u7tgYGAoKCgoNjCm3zeItjVcfDNzb3XTyMLq3dVQUFBGRkZoaGgcJjB+fn4cFWU1NTV2njSPiYsjJzzaz8i3rqzBwcEaGhq7+zkYFVQYBl4SBkcPBTpUcDJdfTIaB2Z+qDUwQDEdFWotPDA4ENstLS1zmjRHXzIDCwAxE7ptRLiIAAAJAUlEQVR4nO2cC1ubaBaAUS6lUMCxl7jU7I7mhiH1kou3KImdppqE2p1OHbs7087+/1+x53yAIYAJurqJ5LyPjyGQtOF9zjnf+T6CHEcQBEEQBEEQBEEQBEEQBJEZlFl/gCeEUttu8khzu0beJqDUPE8jmiQsmZxn6uis10J6Z0e+r1l/sLlDyTEz+werSyNWP/XYXtI1hoJRdX6wFOfTGeqiZBxRAx/vVxJUISuoa5t0+WBYJUVVwMYllC6yhSig6nBzgitgn1KRga5ak1UBLtniPFefprqCykW2OA4cbKRwRbY4VtvTxJVvqznrjztLlFqaehVwAB3ErD/xDIGCdZja1dJSb6ETEZJwSs8wzuUC28pN7kXjbCzwPLHJv7+Tq6WlQ56f9YeeEblI17CyGpOzGpkwrkJoLWYiNvnziIiYrUs+YutwQdsHJVKxoI+KZuVmrGPdWNASDz3WmAds0XvTZEGsLWSJb/K/xGRF2vkEWb2FXKyJZiHKOoqUrQRZafPw2X2RH/vEp6Lk4kTrOciCn7GanyALduVS/IfPnt+XD7O2lfu4FuNjpGShrM1P42UrQdbSeaoJovhZuh+fX/706DomovzzbZw1/iwmaxWnfyE9SbLSNQ+itHw/pJnL+vj2RZS3v/L7CbIgcELZmSSrn3FZnPL6HzG+RPsET9ZquNtKktVKNeMZyZLupm32srhXb2L8xeeTZOGqVf8BZZVe7t3J1hzIevP3GPwtssJlK0mWe0dZovzEZCWl4W+3ycKytflwkSUqwaYUZKS/Ab+9n9GROZB1S4FPrFlL4bL1kLKk0u7e1x00s/N1b7cNR64u2qd7yydXOzvPn59IcyMrqXX4PTLbGckala0kWb27jYY3snZE5EKSLthGW9oRjxVR/Lwr7uHznXmRldiUfomuMYxk3ZSt5D4rVVMak3UMokoKSLo6LklX4juQJe61S9KuKJ5Ie/B8XmRxuVcxthM6+JsO68gvW0fR9SzclWbZISarJHLXF9cvxWtJal9f7IrPUVYbShZEliS9myNZCvdzHD4iIiwLytYZC63YcuBqurlhTNaJKLP0ewdigGco6xtWsF3YNU+ylJ9fxCv8i0rkkmFYFpatfNRTcCDNqkNYFpsmlsQP7Xa7VFpui89O2tcssvY8WRfzJetfCa5gOBwvWmOy8HszG0my9tOtZ4VlnQA70jH4aH8TS7Cj3f73HMv66Y8EWa8jFw3HZS39mXxNMeXFsJAsxjfJGw1PpeUP8HAs/oAdL+dRFqe8SVjPUiKX7iOygrJ1rywcyWpf7SLfIRF3f3zFdqp9+uP78ikMjaffUdbJKXQNJ6cnc9M6JI2Gr179NT4eRmQll60/U17dCU+kGf5W0MB7fbvfx+Pvuengudza3xJYG19YjspKKlsb6cbCp7xEk1tL6OCBX/nLcVmRInUU23Oe9rLhk5YVL/BQ4v8IrcZg3kXjaCVatlppA+sJy+K414n850u0MY3gjpet1fRfZ3vCspSExT8EBsSjSbKwbIVsvk//tZCne8HidnLTvs12GSpbvTt84UhW7susr4RNoBa7ZD9OqGy17vQtSfm+PN65/u80x4t8jFbQurboLgtma2Js/eKVrfyCf1fZpznlbpQjbPT3yZXHNj+xg8CydU6uAvAOuv3bg6tFN2iGwRt4+H6yrs3WJd6IsvC1PUSN3fS7Ec9BduPvIt9YkYSClYu/3D8YVa+Vg94lT3exJlML/kDB+dnh2fvgyYJ+lXs60T/s0KSgmoySq9W2gVptboq6bM76E/y/kA3D0P1t2Exz3ub4i6rluv3gH2sukcv9ft8x2PYANutTbcl2fexFRl/TuosRW+a6pqpaGU9WLmuqljemvUEvauthNxVVELQt/dY3ZAiQJQhqp8IxWYI6TZZcttTFliVomFipZJl1TRiXhWk4XJg0BFnCsBmVdcs6nydrLI6MQcOQgzc96oedNb4sDWp8WJZRVcoDvYABo+gAPOKDYlaZrIIe0mUGw6leHZQ5O8NB5ssSunpIllztdzVNs9wB7rUsq2hzxpZlCQ38JQiwR6gE/4KRtyw2GhYceJPaaUwbIp4uTNYQQitfGMnSh55BVajrXKEIuxu6Ak/dZt87AK+/WT8ziqpgQWgZW+yYqjqZjS2UpTpdOEvFDGRVOip4Gnbx5GGWUICjQx72WVjMVSZEjcsyMeaGgqo5mR0Zmawt/OVWfFm6A48d2a444MwtcHodj6qsriXULF8WVn6Bq8jD9eoMT+dx8WTxkIhq2ZdlYxDZdrXKgyEBI83FSPOasfhoGMhqwEvWK3rWC7y6VW2wYPJkGZBPw3wRwHCCDkzmMMME1uYn9Fl+Gha6KHTdyGwSBrJ0m6WZirLkgVenEewp4OSrfThSZLPl22WZDQw/zXKyO6v2ZZll7AgEJqvMRrsAlFXBAcBiLcHtsjhTcZneYmE2p/L4+LKgQVBZQGGBt6CeN+pIo1EfQIKxhkF1MWTCsmQdH0eybNvM4wvLWS1bgSxv5PcKPFT7btM0TUhOxzA5cwAeIbZUnECGZOnlHjaggSx7/aDCFQZ+5maSG1leT8kiC7bUYqVQsF3o4nXWdlms2bI5b9DLNwvQRayrmtY3fFmy0tE02F8RIlmaJW5kcXbXl8UZGEZd14XhTcsb2HZpjo0R1a96LargukUDOwyQGERWATvZjotHB1mdTo9k6WxlC2VBtVdxPIQgOajIWMKgxcLxEjWgOzjWbXqyqjd91sDCN2W9wKv+0l2zE6yUmoOOCtua1a9wVRdmOANILN1StQ54sB0LR8myXochE95ZBVldVKywN0ECz/iUHpFBo9EYjDbL3qY9cBynDpWJk3Ena0fhcB0TTK+uO07D5PSB0yjgTNKrZpxsl50tR8lsXCHm6GJNaFPWdd0Mdno1SL45bHrHWOtQwObfLdy8Kav16kHYwg62kdXx70EpdKDca252ZzgPCfRkqtYiV6mA2fNBg1ylxczyAhZBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEMSD8l/mZ0BThXBaTwAAAABJRU5ErkJggg=="
          alt="Course"
          className="w-full h-36 object-cover rounded-t-lg "
        />
      </div>
      <CardContent className="px-5  space-y-3">
        <h1 className="hover:underline font-bold text-lg line-clamp-2">
          NextJS Complete Course 2025 in Hindi
        </h1>
        <div className="flex items-center justify-betwee  n">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="user image"
              />
              <AvatarFallback>HC</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm">Hitesh Chaudhary </h1>
          </div>
          <Badge className="bg-green-400 text-white px-2 py-1 text-xs rounded-full ml-3">
            Advance
          </Badge>
        </div>
        <div>
          <span className="text-lg font-bold">₹499</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default Course;
