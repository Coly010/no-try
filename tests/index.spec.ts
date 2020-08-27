import { noTry, noTryAsync } from "../src";

describe("noTry Tuple", () => {
  describe("Sync Tests", () => {
    const throwable = (error: boolean = false) => {
      if (error) {
        throw new Error("Catch me");
      }

      return "Hello World";
    };

    it("should return result of throwable function without error when successful", () => {
      // Act
      const [error, result] = noTry(() => throwable());

      // Assert
      expect(result).toEqual("Hello World");
      expect(error).toBeFalsy();
    });

    it("should return result of throwable function with error when unsuccessful", () => {
      // Act
      const [error, result] = noTry(() => throwable(true));

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
    });
  });

  describe("Async Tests", () => {
    const asyncThrowable = (error: boolean = false) => {
      return new Promise((res, rej) => {
        if (error) {
          rej(new Error("Catch me"));
        }
        res("Hello World");
      });
    };

    it("should return result of throwable function without error when successful", async () => {
      // Act
      const [error, result] = await noTryAsync(() => asyncThrowable());

      // Assert
      expect(result).toEqual("Hello World");
      expect(error).toBeFalsy();
    });

    it("should return result of throwable function with error when unsuccessful", async () => {
      // Act
      const [error, result] = await noTryAsync(() => asyncThrowable(true));

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
    });
  });
});
