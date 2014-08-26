package com.benasmussen.tools.testeditor;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.List;
import java.util.Vector;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.dom4j.Document;
import org.dom4j.io.DOMReader;
import org.dom4j.tree.DefaultElement;
import org.w3c.tidy.Tidy;

/*
 * #%L
 * IdExtractor
 * %%
 * Copyright (C) 2014 Ben Asmussen <opensource@ben-asmussen.com>
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

/**
 * Extract id attributes from html/xhtml file.
 * 
 * @author Ben Asmussen
 *
 */
public class IdExtractor
{

    private Logger logger = Logger.getLogger("IdExtractor");

    private File file;

    private InputStream is = null;

    public IdExtractor(File file)
    {
        super();
        this.file = file;
    }

    public Vector<Vector> parse() throws Exception
    {
        Tidy tidy = new Tidy();
        tidy.setXmlOut(true);
        tidy.setPrintBodyOnly(true);

        Vector<Vector> data = null;
        try
        {
            is = new FileInputStream(file);

            // jtidy parse to odm
            org.w3c.dom.Document parseDOM = tidy.parseDOM(is, null);

            // w3c to dom4j
            DOMReader domReader = new DOMReader();
            Document document = domReader.read(parseDOM);

            if (logger.isDebugEnabled())
            {
                logger.debug("XML: " + document.asXML());
            }

            data = new Vector<Vector>();

            // select all elements with attribute @id
            List<DefaultElement> elements = document.selectNodes("//*[@id]");
            for (DefaultElement element : elements)
            {
                Vector<String> row = new Vector<String>();

                row.addElement(element.attributeValue("id"));
                row.addElement(element.getTextTrim());
                data.addElement(row);
            }

        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            IOUtils.closeQuietly(is);
        }

        return data;
    }

    public File getFile()
    {
        return file;
    }

    public void setFile(File file)
    {
        this.file = file;
    }

}
