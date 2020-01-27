import { noTry, noTryAsync } from "../../src/tuple";

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
      const [result, error] = noTry(() => throwable());

      // Assert
      expect(result).toEqual("Hello World");
      expect(error).toBeFalsy();
    });

    it("should return result of throwable function with error when unsuccessful", () => {
      // Act
      const [result, error] = noTry(() => throwable(true));

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
    });

    it("should return result of throwable function with error when unsuccessful and perform a unique handle", () => {
      // Arrange
      const consoleSpy = spyOn(console, "log");
      let weFoundError = (error: Error) => {
        console.log(error.message);
      };
      // Act
      const [result, error] = noTry(() => throwable(true), weFoundError);

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith("Catch me");
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
      const [result, error] = await noTryAsync(() => asyncThrowable());

      // Assert
      expect(result).toEqual("Hello World");
      expect(error).toBeFalsy();
    });

    it("should return result of throwable function with error when unsuccessful", async () => {
      // Act
      const [result, error] = await noTryAsync(() => asyncThrowable(true));

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
    });

    it("should return result of throwable function with error when unsuccessful and perform a unique handle", async () => {
      // Arrange
      const consoleSpy = spyOn(console, "log");
      let weFoundError = (error: Error) => {
        console.log(error.message);
      };
      // Act
      const [result, error] = await noTryAsync(() => asyncThrowable(true), weFoundError);

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith("Catch me");
    });
  });
});
