## Duole

### Build

https://github.com/facebook/react-native/issues/47666

### Java

最低版本是`Java 17`，

```java
sdk use java 17.0.9-oracle
```

```java
cd android && ./gradlew clean && ./gradlew generateCodegenArtifactsFromSchema --rerun-tasks && ./gradlew assembleRelease
```

```bash
ENVFILE=.env.debug ./gradlew assembleDebug
ENVFILE=.env.release ./gradlew assembleRelease
```
