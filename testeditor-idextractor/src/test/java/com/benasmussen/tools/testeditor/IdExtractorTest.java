package com.benasmussen.tools.testeditor;

import static org.junit.Assert.*;

import java.io.File;
import java.util.Vector;

import org.junit.Test;

public class IdExtractorTest
{

    @Test
    public void testParse() throws Exception
    {
        File file = new File("src/test/resources/content/1.html");

        IdExtractor idExtractor = new IdExtractor(file);

        Vector<Vector> parse = idExtractor.parse();

        assertNotNull(parse);

        assertEquals(26, parse.size());
    }

}
