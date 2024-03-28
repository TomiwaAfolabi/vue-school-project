import { defineStore } from "pinia";
import { client } from "~/utils/sanity/client";
export const useContentStore = defineStore("contentStore", () => {
  async function getHeaderContent() {
    const CONTENT_QUERY = `*[_type == "HeroHeader"]`;
    const content = await client.fetch(CONTENT_QUERY);

    return content;
  }
  async function getCourseDetails() {
    const CONTENT_QUERY = `*[_type == "courseDetails"]`;
    const content = await client.fetch(CONTENT_QUERY);

    return content;
  }
  async function getBasicCardContent() {
    const CONTENT_QUERY = `*[_type == "basicCardContent"]`;
    const content = await client.fetch(CONTENT_QUERY);

    return content;
  }

  async function getProfessionalCardContent() {
    const CONTENT_QUERY = `*[_type == "professionalCardContent"]`;
    const content = await client.fetch(CONTENT_QUERY);

    return content;
  }
  async function getBasicUltraCardContent() {
    const CONTENT_QUERY = `*[_type == "basicUltraContent"]`;
    const content = await client.fetch(CONTENT_QUERY);

    return content;
  }
  getBasicCardContent();
  return {
    getHeaderContent,
    getCourseDetails,
    getBasicCardContent,
    getProfessionalCardContent,
    getBasicUltraCardContent,
  };
});
