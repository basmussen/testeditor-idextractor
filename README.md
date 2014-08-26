TestEditor.org - Html ID Extractor
======================

[TestEditor.org](http://testeditor.org/)

**Build Distribution**

```
git clone https://github.com/basmussen/testeditor-idextractor.git
```


```
cd testeditor-idextractor
```

```
mvn clean package
```

```
target/testeditor-idextractor-0.0.1-SNAPSHOT-dist.zip
```

**Run**
```
unzip testeditor-idextractor-0.0.1-SNAPSHOT-dist.zip
java -jar testeditor-idextractor-0.0.1-SNAPSHOT.jar -input=index.html
```


**Available options**
----------------------------------------------------------------------------------------------------
|**Name**               |**Type**               |**Example**                        |**Description**|
|-----------------------|-----------------------|-----------------------------------|-------------|
|-input              |File                   |folder/index.html             |HTML Input file|
