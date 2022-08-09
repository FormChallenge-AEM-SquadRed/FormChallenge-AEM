/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code certificatesModel} Sling Model used for the multifield in {@code reactapp/components/multifield-tabs} component.
 * 
 */
@ConsumerType
public interface certificatesModel
    extends ComponentExporter
{


    @JsonProperty("titletext")
    String getTitletext();

    @JsonProperty("titlecolor")
    String getTitlecolor();

    @JsonProperty("labeltextcertificates")
    String getLabeltextcertificates();

    @JsonProperty("labelcolorcertificates")
    String getLabelcolorcertificates();

    @JsonProperty("placeholdertextcertificates")
    String getPlaceholdertextcertificates();

    @JsonProperty("placeholdercolorcertificates")
    String getPlaceholdercolorcertificates();

    @JsonProperty("inputbackgroundcolorcertificates")
    String getInputbackgroundcolorcertificates();

    @JsonProperty("buttonlabelcertificates")
    String getButtonlabelcertificates();

    @JsonProperty("buttonlabelcolorcertificates")
    String getButtonlabelcolorcertificates();

    @JsonProperty("buttonbackgroundcolorcertificates")
    String getButtonbackgroundcolorcertificates();

    @JsonProperty("buttonlabelcertificates2")
    String getButtonlabelcertificates2();

    @JsonProperty("buttonlabelcolorcertificates2")
    String getButtonlabelcolorcertificates2();

    @JsonProperty("buttonbackgroundcolorcertificates2")
    String getButtonbackgroundcolorcertificates2();

}
